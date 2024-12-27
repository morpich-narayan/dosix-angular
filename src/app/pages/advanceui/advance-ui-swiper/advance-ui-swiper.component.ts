import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
	selector: 'app-advance-ui-swiper',
	standalone: true,
	imports: [NgbCarouselModule, FormsModule,BreadcrumbsComponent],
	templateUrl: './advance-ui-swiper.component.html',
	styleUrl: './advance-ui-swiper.component.scss'
})
export class AdvanceUiSwiperComponent {
	breadCrumbItems = [{ label: 'Advance UI' }, { label: 'Swiper', active: true }]
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
	showNavigationArrows = false;
	showNavigationIndicators = false;

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

}
