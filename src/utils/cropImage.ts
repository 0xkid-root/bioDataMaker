/**
 * Creates a cropped image from the source image using the crop area
 */
export const createCroppedImage = async (
    imageSrc: string,
    pixelCrop: { x: number; y: number; width: number; height: number }
): Promise<string> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('Failed to get canvas context');
    }

    // Set canvas size to match crop area
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // Draw the cropped image
    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    );

    // Convert canvas to blob then to base64
    return new Promise((resolve, reject) => {
        canvas.toBlob(
            (blob) => {
                if (!blob) {
                    reject(new Error('Failed to create blob'));
                    return;
                }

                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result as string);
                };
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            },
            'image/jpeg',
            0.92
        );
    });
};

/**
 * Helper function to create an image element from a source URL
 */
const createImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', (error) => reject(error));
        image.setAttribute('crossOrigin', 'anonymous');
        image.src = url;
    });
};

/**
 * Get the pixel crop area from the percentage-based crop
 */
export const getPixelCrop = (
    imageSrc: string,
    crop: { x: number; y: number; width: number; height: number }
): Promise<{ x: number; y: number; width: number; height: number }> => {
    return createImage(imageSrc).then((image) => {
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        return {
            x: crop.x * scaleX,
            y: crop.y * scaleY,
            width: crop.width * scaleX,
            height: crop.height * scaleY,
        };
    });
};
