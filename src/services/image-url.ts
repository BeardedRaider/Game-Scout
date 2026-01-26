import noImage from '../assets/imgPlaceholder.webp';

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage; // Return placeholder image if url is undefined or empty
    const target = 'media/';
    const index = url.lastIndexOf(target) + target.length;
    
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
//some games will not have images so the page will not render, come back to this later
export default getCroppedImageUrl;