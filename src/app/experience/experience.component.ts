import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
	public experienceData = data['Experience'];

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}
}
