import { useState, useRef, ChangeEvent, useCallback } from 'react';
import { Upload, X, Image as ImageIcon, Crop, ZoomIn, ZoomOut, Check } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop';
import imageCompression from 'browser-image-compression';
import toast from 'react-hot-toast';
import { createCroppedImage } from '../utils/cropImage';

interface PhotoUploadProps {
    value?: string;
    onChange: (photoData: string) => void;
    onRemove: () => void;
}

export const PhotoUpload = ({ value, onChange, onRemove }: PhotoUploadProps) => {
    const [isUploading, setIsUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [showCropper, setShowCropper] = useState(false);
    const [imageToCrop, setImageToCrop] = useState<string>('');
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleFile = async (file: File) => {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            toast.error('Please upload an image file (JPEG, PNG, WebP)');
            return;
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            toast.error('Image size must be less than 10MB');
            return;
        }

        setIsUploading(true);

        try {
            // First compress the image before showing cropper
            const options = {
                maxSizeMB: 2,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            };

            const compressedFile = await imageCompression(file, options);

            // Convert to base64 for cropper
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setImageToCrop(base64String);
                setShowCropper(true);
                setIsUploading(false);
            };
            reader.onerror = () => {
                toast.error('Failed to read image file');
                setIsUploading(false);
            };
            reader.readAsDataURL(compressedFile);
        } catch (error) {
            console.error('Error processing image:', error);
            toast.error('Failed to process image');
            setIsUploading(false);
        }
    };

    const handleCropSave = async () => {
        if (!croppedAreaPixels || !imageToCrop) return;

        setIsUploading(true);
        try {
            const croppedImage = await createCroppedImage(imageToCrop, croppedAreaPixels);
            onChange(croppedImage);
            toast.success('Photo uploaded successfully!');
            setShowCropper(false);
            setImageToCrop('');
            setCrop({ x: 0, y: 0 });
            setZoom(1);
        } catch (error) {
            console.error('Error cropping image:', error);
            toast.error('Failed to crop image');
        } finally {
            setIsUploading(false);
        }
    };

    const handleCropCancel = () => {
        setShowCropper(false);
        setImageToCrop('');
        setCrop({ x: 0, y: 0 });
        setZoom(1);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            await handleFile(files[0]);
        }
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = async (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            await handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        onRemove();
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        toast.success('Photo removed');
    };

    const handleEditPhoto = () => {
        if (value) {
            setImageToCrop(value);
            setShowCropper(true);
        }
    };

    return (
        <>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Photo <span className="text-gray-500 text-xs">(Optional)</span>
                </label>

                {value ? (
                    <div className="relative group">
                        <img
                            src={value}
                            alt="Profile"
                            className="w-full max-w-xs h-auto rounded-lg shadow-md mx-auto"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all rounded-lg flex items-center justify-center gap-2">
                            <button
                                type="button"
                                onClick={handleEditPhoto}
                                className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2"
                            >
                                <Crop className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={handleRemove}
                                className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 hover:bg-red-700 text-white rounded-full p-2"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div
                        onClick={handleClick}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${dragActive
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                            } ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="hidden"
                        />

                        <div className="flex flex-col items-center gap-3">
                            {isUploading ? (
                                <>
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                                    <p className="text-sm text-gray-600">Processing image...</p>
                                </>
                            ) : (
                                <>
                                    <div className="bg-blue-100 rounded-full p-3">
                                        <ImageIcon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">
                                            Click to upload or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            PNG, JPG, WebP up to 10MB
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Upload className="w-4 h-4" />
                                        <span>Upload Photo</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                <p className="mt-2 text-xs text-gray-500">
                    Recommended: Passport size photo with clear background
                </p>
            </div>

            {/* Image Cropper Modal */}
            {showCropper && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                        <div className="p-4 border-b">
                            <h3 className="text-lg font-semibold text-gray-900">Crop Photo</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Adjust and crop your photo for the best result
                            </p>
                        </div>

                        <div className="relative flex-1 bg-gray-900" style={{ minHeight: '400px' }}>
                            <Cropper
                                image={imageToCrop}
                                crop={crop}
                                zoom={zoom}
                                aspect={1}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                                cropShape="round"
                                showGrid={false}
                            />
                        </div>

                        <div className="p-4 border-t bg-gray-50">
                            <div className="flex items-center gap-3 mb-4">
                                <ZoomOut className="w-5 h-5 text-gray-600" />
                                <input
                                    type="range"
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    value={zoom}
                                    onChange={(e) => setZoom(Number(e.target.value))}
                                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <ZoomIn className="w-5 h-5 text-gray-600" />
                            </div>

                            <div className="flex items-center justify-end gap-3">
                                <button
                                    onClick={handleCropCancel}
                                    disabled={isUploading}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCropSave}
                                    disabled={isUploading}
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                                >
                                    {isUploading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                            <span>Processing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Check className="w-4 h-4" />
                                            <span>Crop & Save</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
