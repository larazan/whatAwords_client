import React from 'react'
import { resizedHeight } from '../utils/masonry.js';
import { useModal } from '../utils/useModal';

const Image = ({ image, IMAGE_WIDTH }) => {
    const [isVisible, imageRef] = useImageLazyLoad();
	const modal = useModal();

    return (
        <div
			className="image"
			ref={imageRef}
			style={{
				position: 'relative',
				height: resizedHeight(image.width, image.height, IMAGE_WIDTH),
				cursor: 'zoom-in',
			}}
			onClick={() => {
				modal.showImage(image);
			}}
		>
            <div className="vignate">
                <div className="credit" onClick={(event) => { event.stopPropagation(); }}>
                    <a href="https://unsplash.com/@behy_studio" target="_blank" rel="noreferrer noopener" className="credit-photo">
                        <img src="https://images.unsplash.com/profile-1631871315098-e5896734383eimage?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=32&amp;w=32" alt="Photographer profile picture" class="sc-eCssSg hmocIu" />
                    </a>
                    <a href="https://unsplash.com/@behy_studio" target="_blank" rel="noreferrer noopener" className="credit-name">
                        <div class="sc-jSgupP ckDfJz">Behnam Norouzi</div>
                    </a>
                </div>
            </div>
            {isVisible && (
				<img
					src={image.urls.raw + '&w=416'}
					className="unsplashImage"
					style={{
						maxWidth: IMAGE_WIDTH,
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: 5,
					}}
					alt={image.description || image.alt_description}
				/>
			)}
        </div>
    )
}

export default Image
