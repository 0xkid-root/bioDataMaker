interface TemplatePreviewProps {
  templateId: string;
  category: string;
}

export const TemplatePreview = ({ templateId, category }: TemplatePreviewProps) => {
  const getPreviewContent = () => {
    switch (templateId) {
      case 'traditional-1':
        return (
          <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-50 flex flex-col p-2">
            <div className="h-1/4 bg-gradient-to-r from-red-700 to-red-600 rounded flex items-center justify-center text-white">
              <div className="text-xs">🕉️ Biodata</div>
            </div>
            <div className="flex-1 p-2 space-y-1">
              <div className="h-2 bg-red-300 rounded w-3/4"></div>
              <div className="h-1 bg-gray-300 rounded w-full"></div>
              <div className="h-1 bg-gray-300 rounded w-full"></div>
              <div className="h-1 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        );

      case 'traditional-2':
        return (
          <div className="w-full h-full bg-white flex flex-col border-4 border-red-800">
            <div className="h-1/5 border-b-2 border-red-800 flex items-center justify-center">
              <div className="text-xs text-red-800">॥ श्री ॥</div>
            </div>
            <div className="flex-1 p-2 space-y-1">
              <div className="h-1 bg-red-800 rounded w-2/3"></div>
              <div className="h-1 bg-gray-300 rounded w-full"></div>
              <div className="h-1 bg-gray-300 rounded w-full"></div>
              <div className="h-1 bg-gray-300 rounded w-4/5"></div>
            </div>
          </div>
        );

      case 'traditional-3':
        return (
          <div className="w-full h-full bg-gradient-to-br from-red-900 via-red-700 to-red-900 flex flex-col p-1">
            <div className="h-1/4 flex items-center justify-center text-amber-300">
              <div className="text-xs">🕉️</div>
            </div>
            <div className="flex-1 bg-red-950 bg-opacity-60 rounded p-2 space-y-1">
              <div className="h-1.5 bg-amber-400 rounded w-3/4"></div>
              <div className="h-1 bg-amber-200 rounded w-full"></div>
              <div className="h-1 bg-amber-200 rounded w-full"></div>
              <div className="h-1 bg-amber-200 rounded w-5/6"></div>
            </div>
          </div>
        );

      case 'traditional-4':
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 flex flex-col border-4 border-orange-400 rounded-lg">
            <div className="h-1/4 bg-gradient-to-r from-orange-600 to-red-600 rounded-t flex items-center justify-center text-white">
              <div className="text-xs">🪷</div>
            </div>
            <div className="flex-1 p-2 space-y-1">
              <div className="h-1.5 bg-orange-500 rounded w-2/3"></div>
              <div className="h-1 bg-orange-300 rounded w-full"></div>
              <div className="h-1 bg-orange-300 rounded w-full"></div>
              <div className="h-1 bg-orange-300 rounded w-4/5"></div>
            </div>
          </div>
        );

      case 'minimal-1':
      case 'minimal-2':
      case 'minimal-3':
      case 'minimal-4':
        return (
          <div className="w-full h-full bg-white flex flex-col p-2">
            <div className="h-1/5 flex flex-col items-center justify-center border-b">
              <div className="h-2 bg-gray-800 rounded w-2/3 mb-1"></div>
              <div className="h-1 bg-gray-400 rounded w-1/2"></div>
            </div>
            <div className="flex-1 p-2 space-y-1">
              <div className="h-1 bg-gray-600 rounded w-1/2"></div>
              <div className="h-0.5 bg-gray-300 rounded w-full"></div>
              <div className="h-0.5 bg-gray-300 rounded w-full"></div>
              <div className="h-0.5 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        );

      case 'simple-1':
      case 'simple-2':
      case 'simple-3':
      case 'simple-4':
      case 'simple-5':
      case 'simple-6':
      case 'simple-7':
      case 'simple-8':
      case 'simple-9':
      case 'simple-10':
      case 'simple-11':
      case 'simple-12':
      case 'simple-13':
      case 'simple-14':
      case 'simple-15':
        // Get the image path based on template ID
        const simpleImageMap: { [key: string]: string } = {
          'simple-1': '/images/simpleImg/101.webp',
          'simple-2': '/images/simpleImg/102.webp',
          'simple-3': '/images/simpleImg/105.webp',
          'simple-4': '/images/simpleImg/107.webp',
          'simple-5': '/images/simpleImg/109.webp',
          'simple-6': '/images/simpleImg/110.webp',
          'simple-7': '/images/simpleImg/111.webp',
          'simple-8': '/images/simpleImg/112.webp',
          'simple-9': '/images/simpleImg/114.webp',
          'simple-10': '/images/simpleImg/116.webp',
          'simple-11': '/images/simpleImg/117.webp',
          'simple-12': '/images/simpleImg/123.webp',
          'simple-13': '/images/simpleImg/125.webp',
          'simple-14': '/images/simpleImg/127.webp',
          'simple-15': '/images/simpleImg/156.webp',
        };
        return (
          <div className="w-full h-full bg-white rounded overflow-hidden">
            <img
              src={simpleImageMap[templateId] || '/images/simpleImg/101.webp'}
              alt={`${templateId} preview`}
              className="w-full h-full object-cover"
            />
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col p-2">
            <div className="h-1/4 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center text-white">
              <div className="text-xs">Biodata</div>
            </div>
            <div className="flex-1 p-2 space-y-1">
              <div className="h-2 bg-blue-400 rounded w-3/4"></div>
              <div className="h-1 bg-gray-300 rounded w-full"></div>
              <div className="h-1 bg-gray-300 rounded w-full"></div>
              <div className="h-1 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full aspect-[3/4] bg-gray-100 rounded shadow-sm overflow-hidden">
      {getPreviewContent()}
    </div>
  );
};
