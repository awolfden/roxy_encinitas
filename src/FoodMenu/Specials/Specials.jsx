import React from 'react';
import { useMenuImages } from '../../hooks/useMenuImages';
import specials from '../../images/SpecialsSummer2024.jpg';

const Specials = () => {
    const { menuImages, loading } = useMenuImages();
    
    // Get the dynamic image URL or fallback to static image
    const imageUrl = menuImages.specials?.imageUrl || specials;
    const isUsingDynamicImage = !!menuImages.specials?.imageUrl;

    if (loading) {
        return (
            <div id="specials" style={{ padding: '40px', textAlign: 'center' }}>
                <p>Loading menu...</p>
            </div>
        );
    }

    return (
        <div id="specials">
            <img 
                src={imageUrl} 
                alt="specials menu" 
                style={{ width: '70%' }}
            />
            {isUsingDynamicImage && (
                <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
                    Updated: {new Date(menuImages.specials.updatedAt).toLocaleDateString()}
                </p>
            )}
        </div>
    );
};

export default Specials;

