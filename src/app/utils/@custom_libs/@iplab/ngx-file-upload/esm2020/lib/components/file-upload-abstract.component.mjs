import { FileUploadControl } from './../helpers/control.class';
import { Directive } from '@angular/core';
import { IsNullOrEmpty } from './../helpers/helpers.class';
import * as i0 from "@angular/core";
export class FileUploadAbstract {
    constructor(hostElementRef, renderer, cdr) {
        this.hostElementRef = hostElementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.control = null;
        this.isMultiple = true;
        this.hooks = [];
        this.subscriptions = [];
        this.onChange = () => { };
    }
    ngOnInit() {
        if (IsNullOrEmpty(this.control)) {
            this.control = new FileUploadControl();
        }
        this.setEvents();
        this.checkAndMarkAsDisabled();
        this.checkAndSetMultiple();
        this.connectToForm();
    }
    ngOnDestroy() {
        this.cdr.detach();
        this.hooks.forEach((hook) => hook());
        this.hooks.length = 0;
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    setEvents() {
        this.subscriptions.push(this.control.statusChanges.subscribe((status) => this.checkAndMarkAsDisabled()));
        this.subscriptions.push(this.control.eventsChanges.subscribe((event) => this.triggerEvent(event)));
        this.subscriptions.push(this.control.acceptChanges.subscribe((accept) => this.updateAcceptAttr(accept)));
        this.subscriptions.push(this.control.multipleChanges.subscribe((isMultiple) => this.toggleMultiple(isMultiple)));
    }
    clearInputEl() {
        this.input.nativeElement.value = null;
    }
    checkAndSetMultiple() {
        if (!this.control) {
            return;
        }
        const isMultiple = !(this.isMultiple === false || this.isMultiple === 'false');
        if (isMultiple !== this.control.isMultiple) {
            this.control.multiple(isMultiple);
        }
    }
    triggerEvent(event) {
        if (typeof this.label.nativeElement[event] === 'function') {
            this.label.nativeElement[event]();
        }
    }
    updateAcceptAttr(accept) {
        if (!IsNullOrEmpty(accept)) {
            this.renderer.setAttribute(this.input.nativeElement, 'accept', accept);
        }
        else {
            this.renderer.removeAttribute(this.input.nativeElement, 'accept');
        }
    }
    checkAndMarkAsDisabled() {
        if (this.control.disabled) {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'disabled');
            this.renderer.setProperty(this.input.nativeElement, 'disabled', true);
        }
        else {
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'disabled');
            this.renderer.setProperty(this.input.nativeElement, 'disabled', false);
        }
    }
    toggleMultiple(isMultiple) {
        if (isMultiple) {
            this.renderer.setAttribute(this.input.nativeElement, 'multiple', '');
        }
        else {
            this.renderer.removeAttribute(this.input.nativeElement, 'multiple');
        }
    }
    /**
     * ControlValueAccessor implementation
     */
    connectToForm() {
        this.subscriptions.push(this.control.valueChanges.subscribe((v) => this.onChange(v)));
    }
}
FileUploadAbstract.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadAbstract, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.????FactoryTarget.Directive });
FileUploadAbstract.??dir = i0.????ngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: FileUploadAbstract, ngImport: i0 });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadAbstract, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaXBsYWIvbmd4LWZpbGUtdXBsb2FkL3NyYy9saWIvY29tcG9uZW50cy9maWxlLXVwbG9hZC1hYnN0cmFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUUsT0FBTyxFQUErRCxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUkzRCxNQUFNLE9BQWdCLGtCQUFrQjtJQWdCcEMsWUFDdUIsY0FBMEIsRUFDMUIsUUFBbUIsRUFDbkIsR0FBc0I7UUFGdEIsbUJBQWMsR0FBZCxjQUFjLENBQVk7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpCdEMsWUFBTyxHQUFzQixJQUFJLENBQUM7UUFNL0IsZUFBVSxHQUFxQixJQUFJLENBQUM7UUFFM0IsVUFBSyxHQUFvQixFQUFFLENBQUM7UUFFNUIsa0JBQWEsR0FBd0IsRUFBRSxDQUFDO1FBRWpELGFBQVEsR0FBNkIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBTXBELENBQUM7SUFFRSxRQUFRO1FBQ1gsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVTLFNBQVM7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUNsRixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDdkYsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUMxRixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDbkcsQ0FBQztJQUNOLENBQUM7SUFFUyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUVTLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU87U0FDVjtRQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssSUFBSyxJQUFJLENBQUMsVUFBcUIsS0FBSyxPQUFPLENBQUMsQ0FBQztRQUMzRixJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBZ0I7UUFDakMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVPLGdCQUFnQixDQUFDLE1BQWM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0wsQ0FBQztJQUVPLHNCQUFzQjtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFFO0lBQ0wsQ0FBQztJQUVPLGNBQWMsQ0FBQyxVQUFtQjtRQUN0QyxJQUFJLFVBQVUsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxhQUFhO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDL0QsQ0FBQztJQUNOLENBQUM7OytHQWpIaUIsa0JBQWtCO21HQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFEdkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbGVFdmVudCwgRmlsZVVwbG9hZENvbnRyb2wgfSBmcm9tICcuLy4uL2hlbHBlcnMvY29udHJvbC5jbGFzcyc7XHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25Jbml0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElzTnVsbE9yRW1wdHkgfSBmcm9tICcuLy4uL2hlbHBlcnMvaGVscGVycy5jbGFzcyc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWxlVXBsb2FkQWJzdHJhY3QgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHVibGljIGNvbnRyb2w6IEZpbGVVcGxvYWRDb250cm9sID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGxhYmVsOiBFbGVtZW50UmVmPEhUTUxMYWJlbEVsZW1lbnQ+O1xyXG5cclxuICAgIHByb3RlY3RlZCBpc011bHRpcGxlOiBib29sZWFuIHwgc3RyaW5nID0gdHJ1ZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaG9va3M6IEFycmF5PEZ1bmN0aW9uPiA9IFtdO1xyXG5cclxuICAgIHByb3RlY3RlZCByZWFkb25seSBzdWJzY3JpcHRpb25zOiBBcnJheTxTdWJzY3JpcHRpb24+ID0gW107XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ2hhbmdlOiAodjogQXJyYXk8RmlsZT4pID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaG9zdEVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHRoaXMuY29udHJvbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sID0gbmV3IEZpbGVVcGxvYWRDb250cm9sKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tBbmRNYXJrQXNEaXNhYmxlZCgpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tBbmRTZXRNdWx0aXBsZSgpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFRvRm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNkci5kZXRhY2goKTtcclxuICAgICAgICB0aGlzLmhvb2tzLmZvckVhY2goKGhvb2spID0+IGhvb2soKSk7XHJcbiAgICAgICAgdGhpcy5ob29rcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWJzY3JpcHRpb24pID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0RXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHN0YXR1cykgPT4gdGhpcy5jaGVja0FuZE1hcmtBc0Rpc2FibGVkKCkpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5ldmVudHNDaGFuZ2VzLnN1YnNjcmliZSgoZXZlbnQ6IEZpbGVFdmVudCkgPT4gdGhpcy50cmlnZ2VyRXZlbnQoZXZlbnQpKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuYWNjZXB0Q2hhbmdlcy5zdWJzY3JpYmUoKGFjY2VwdDogc3RyaW5nKSA9PiB0aGlzLnVwZGF0ZUFjY2VwdEF0dHIoYWNjZXB0KSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sLm11bHRpcGxlQ2hhbmdlcy5zdWJzY3JpYmUoKGlzTXVsdGlwbGU6IGJvb2xlYW4pID0+IHRoaXMudG9nZ2xlTXVsdGlwbGUoaXNNdWx0aXBsZSkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2xlYXJJbnB1dEVsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNoZWNrQW5kU2V0TXVsdGlwbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRyb2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNNdWx0aXBsZSA9ICEodGhpcy5pc011bHRpcGxlID09PSBmYWxzZSB8fCAodGhpcy5pc011bHRpcGxlIGFzIHN0cmluZykgPT09ICdmYWxzZScpO1xyXG4gICAgICAgIGlmIChpc011bHRpcGxlICE9PSB0aGlzLmNvbnRyb2wuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wubXVsdGlwbGUoaXNNdWx0aXBsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJpZ2dlckV2ZW50KGV2ZW50OiBGaWxlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwubmF0aXZlRWxlbWVudFtldmVudF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50W2V2ZW50XSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUFjY2VwdEF0dHIoYWNjZXB0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIUlzTnVsbE9yRW1wdHkoYWNjZXB0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdhY2NlcHQnLCBhY2NlcHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ2FjY2VwdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrQW5kTWFya0FzRGlzYWJsZWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9nZ2xlTXVsdGlwbGUoaXNNdWx0aXBsZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChpc011bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ211bHRpcGxlJywgJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ211bHRpcGxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb25uZWN0VG9Gb3JtKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodikgPT4gdGhpcy5vbkNoYW5nZSh2KSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==