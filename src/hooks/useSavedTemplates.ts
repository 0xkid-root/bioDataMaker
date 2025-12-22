import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { BiodataData, TemplateCustomization } from '../types/biodata';
import toast from 'react-hot-toast';

// Generate a simple browser fingerprint for session identification
const getBrowserFingerprint = (): string => {
    const stored = localStorage.getItem('biodata_session_id');
    if (stored) return stored;

    const fingerprint = `sess_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    localStorage.setItem('biodata_session_id', fingerprint);
    return fingerprint;
};

export interface SavedTemplate {
    id: string;
    template_name: string;
    biodata_data: BiodataData;
    template_id: string;
    customization: TemplateCustomization;
    created_at: string;
    updated_at: string;
    is_favorite: boolean;
}

export const useSavedTemplates = () => {
    const [templates, setTemplates] = useState<SavedTemplate[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const sessionId = getBrowserFingerprint();

    // Load all templates for this session
    const loadTemplates = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('saved_templates')
                .select('*')
                .eq('user_session_id', sessionId)
                .order('created_at', { ascending: false });

            if (error) throw error;

            setTemplates(data || []);
        } catch (error: any) {
            console.error('Error loading templates:', error);
            toast.error('Failed to load saved templates');
        } finally {
            setIsLoading(false);
        }
    };

    // Save a new template
    const saveTemplate = async (
        name: string,
        biodataData: Partial<BiodataData>,
        templateId: string,
        customization: TemplateCustomization
    ): Promise<boolean> => {
        try {
            const { error } = await supabase.from('saved_templates').insert({
                user_session_id: sessionId,
                template_name: name,
                biodata_data: biodataData,
                template_id: templateId,
                customization: customization,
            });

            if (error) throw error;

            toast.success('Template saved successfully!');
            await loadTemplates(); // Reload templates
            return true;
        } catch (error: any) {
            console.error('Error saving template:', error);
            toast.error('Failed to save template');
            return false;
        }
    };

    // Update an existing template
    const updateTemplate = async (
        id: string,
        updates: Partial<SavedTemplate>
    ): Promise<boolean> => {
        try {
            const { error } = await supabase
                .from('saved_templates')
                .update(updates)
                .eq('id', id)
                .eq('user_session_id', sessionId);

            if (error) throw error;

            toast.success('Template updated successfully!');
            await loadTemplates();
            return true;
        } catch (error: any) {
            console.error('Error updating template:', error);
            toast.error('Failed to update template');
            return false;
        }
    };

    // Delete a template
    const deleteTemplate = async (id: string): Promise<boolean> => {
        try {
            const { error } = await supabase
                .from('saved_templates')
                .delete()
                .eq('id', id)
                .eq('user_session_id', sessionId);

            if (error) throw error;

            toast.success('Template deleted successfully!');
            await loadTemplates();
            return true;
        } catch (error: any) {
            console.error('Error deleting template:', error);
            toast.error('Failed to delete template');
            return false;
        }
    };

    // Toggle favorite status
    const toggleFavorite = async (id: string, isFavorite: boolean): Promise<boolean> => {
        return updateTemplate(id, { is_favorite: !isFavorite });
    };

    // Duplicate a template
    const duplicateTemplate = async (template: SavedTemplate): Promise<boolean> => {
        return saveTemplate(
            `${template.template_name} (Copy)`,
            template.biodata_data,
            template.template_id,
            template.customization
        );
    };

    // Load templates on mount
    useEffect(() => {
        loadTemplates();
    }, []);

    return {
        templates,
        isLoading,
        saveTemplate,
        updateTemplate,
        deleteTemplate,
        toggleFavorite,
        duplicateTemplate,
        loadTemplates,
    };
};
