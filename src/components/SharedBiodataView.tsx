import { useEffect, useState } from 'react';
import { Download, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { SharedBiodata } from '../types/biodata';
import { getTemplateComponent } from './templates';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface SharedBiodataViewProps {
  shareId: string;
}

export const SharedBiodataView = ({ shareId }: SharedBiodataViewProps) => {
  const [biodata, setBiodata] = useState<SharedBiodata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    loadSharedBiodata();
  }, [shareId]);

  const loadSharedBiodata = async () => {
    try {
      const { data, error } = await supabase
        .from('shared_biodata')
        .select('*')
        .eq('id', shareId)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setError('Biodata not found or has expired');
        return;
      }

      setBiodata({
        id: data.id,
        data: data.data,
        templateId: data.template_id,
        customization: data.customization,
        expiresAt: data.expires_at,
        viewCount: data.view_count,
      });

      await supabase
        .from('shared_biodata')
        .update({ view_count: data.view_count + 1 })
        .eq('id', shareId);
    } catch (err) {
      setError('Failed to load biodata');
      console.error('Failed to load shared biodata:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading biodata...</p>
        </div>
      </div>
    );
  }

  if (error || !biodata) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Biodata Not Available
          </h2>
          <p className="text-gray-600">
            {error || 'This biodata link may have expired or is invalid.'}
          </p>
        </div>
      </div>
    );
  }

  const TemplateComponent = getTemplateComponent(biodata.customization.templateId);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm print:hidden flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Marriage Biodata</h1>
              <p className="text-sm text-gray-600">Shared biodata view</p>
            </div>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-8 flex-grow">
        <div id="biodata-content">
          <TemplateComponent
            data={biodata.data}
            customization={biodata.customization}
          />
        </div>
      </div>

      <div className="text-center py-8 text-gray-600 text-sm print:hidden">
        <p>
          This biodata was shared using our free marriage biodata maker.
        </p>
        <p className="mt-1">
          Create your own at{' '}
          <a href="/" className="text-blue-600 hover:underline">
            {window.location.host}
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};
