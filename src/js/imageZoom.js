import mediumZoom from 'medium-zoom';

export default function activateZoom() {
    mediumZoom('[data-zoomable]', {
        background: '#000', // สีพื้นหลังเวลา zoom
    });
}
