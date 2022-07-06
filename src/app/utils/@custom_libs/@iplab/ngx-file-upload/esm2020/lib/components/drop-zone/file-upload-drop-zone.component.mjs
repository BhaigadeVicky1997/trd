import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class FileUploadDropZoneComponent {
}
FileUploadDropZoneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadDropZoneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FileUploadDropZoneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.2", type: FileUploadDropZoneComponent, selector: "file-upload-drop-zone", ngImport: i0, template: "<div class=\"icon\">\r\n    <svg viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n        </g>\r\n    </svg>\r\n</div>\r\n\r\n<div class=\"upload-text\">\r\n    <ng-content></ng-content>\r\n</div>", styles: [":host{display:block}.icon{height:35px;width:35px;border:1px solid #eaeaea;border-radius:4px}.icon svg{fill:#909293}.upload-text{overflow:hidden;width:auto;position:relative;padding-left:20px}:host-context(.list-visible) .upload-text{display:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadDropZoneComponent, decorators: [{
            type: Component,
            args: [{ selector: `file-upload-drop-zone`, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"icon\">\r\n    <svg viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n        </g>\r\n    </svg>\r\n</div>\r\n\r\n<div class=\"upload-text\">\r\n    <ng-content></ng-content>\r\n</div>", styles: [":host{display:block}.icon{height:35px;width:35px;border:1px solid #eaeaea;border-radius:4px}.icon svg{fill:#909293}.upload-text{overflow:hidden;width:auto;position:relative;padding-left:20px}:host-context(.list-visible) .upload-text{display:none}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtZHJvcC16b25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lwbGFiL25neC1maWxlLXVwbG9hZC9zcmMvbGliL2NvbXBvbmVudHMvZHJvcC16b25lL2ZpbGUtdXBsb2FkLWRyb3Atem9uZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pcGxhYi9uZ3gtZmlsZS11cGxvYWQvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Atem9uZS9maWxlLXVwbG9hZC1kcm9wLXpvbmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCx1QkFBdUIsRUFDMUIsTUFBTSxlQUFlLENBQUM7O0FBUXZCLE1BQU0sT0FBTywyQkFBMkI7O3dIQUEzQiwyQkFBMkI7NEdBQTNCLDJCQUEyQiw2RENYeEMsdTFDQWtCTTsyRkRQTywyQkFBMkI7a0JBTnZDLFNBQVM7K0JBQ0ksdUJBQXVCLG1CQUdoQix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBgZmlsZS11cGxvYWQtZHJvcC16b25lYCxcclxuICAgIHRlbXBsYXRlVXJsOiBgLi9maWxlLXVwbG9hZC1kcm9wLXpvbmUuY29tcG9uZW50Lmh0bWxgLFxyXG4gICAgc3R5bGVVcmxzOiBbYC4vZmlsZS11cGxvYWQtZHJvcC16b25lLmNvbXBvbmVudC5zY3NzYF0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZERyb3Bab25lQ29tcG9uZW50IHtcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiaWNvblwiPlxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDk2IDk2XCI+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjIuOCw2OC4xYzAtMC42LTAuMi0xLjEtMC42LTEuNWMtMC40LTAuNC0wLjktMC42LTEuNS0wLjZzLTEuMSwwLjItMS41LDAuNlxyXG4gICAgICAgICAgICAgICAgYy0wLjQsMC40LTAuNiwwLjktMC42LDEuNWMwLDAuNiwwLjIsMS4xLDAuNiwxLjVjMC40LDAuNCwwLjksMC42LDEuNSwwLjZzMS4xLTAuMiwxLjUtMC42UzYyLjgsNjguNyw2Mi44LDY4LjF6IE03MS4zLDY4LjFcclxuICAgICAgICAgICAgICAgIGMwLTAuNi0wLjItMS4xLTAuNi0xLjVjLTAuNC0wLjQtMC45LTAuNi0xLjUtMC42Yy0wLjYsMC0xLjEsMC4yLTEuNSwwLjZDNjcuMiw2Nyw2Nyw2Ny41LDY3LDY4LjFjMCwwLjYsMC4yLDEuMSwwLjYsMS41XHJcbiAgICAgICAgICAgICAgICBzMC45LDAuNiwxLjUsMC42YzAuNiwwLDEuMS0wLjIsMS41LTAuNkM3MS4xLDY5LjIsNzEuMyw2OC43LDcxLjMsNjguMXogTTc1LjUsNjAuN3YxMC42YzAsMC45LTAuMywxLjYtMC45LDIuMlxyXG4gICAgICAgICAgICAgICAgYy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOUgyMy43Yy0wLjksMC0xLjYtMC4zLTIuMi0wLjljLTAuNi0wLjYtMC45LTEuNC0wLjktMi4yVjYwLjdjMC0wLjksMC4zLTEuNiwwLjktMi4yXHJcbiAgICAgICAgICAgICAgICBjMC42LTAuNiwxLjQtMC45LDIuMi0wLjloMTQuMWMwLjUsMS4yLDEuMiwyLjIsMi4zLDNjMS4xLDAuOCwyLjMsMS4yLDMuNywxLjJoOC41YzEuMywwLDIuNi0wLjQsMy43LTEuMmMxLjEtMC44LDEuOS0xLjgsMi4zLTNcclxuICAgICAgICAgICAgICAgIGgxNC4xYzAuOSwwLDEuNiwwLjMsMi4yLDAuOUM3NS4yLDU5LjEsNzUuNSw1OS44LDc1LjUsNjAuN3ogTTY0LjgsMzkuM2MtMC40LDAuOS0xLDEuMy0yLDEuM2gtOC41djE0LjhjMCwwLjYtMC4yLDEuMS0wLjYsMS41XHJcbiAgICAgICAgICAgICAgICBjLTAuNCwwLjQtMC45LDAuNi0xLjUsMC42aC04LjVjLTAuNiwwLTEuMS0wLjItMS41LTAuNmMtMC40LTAuNC0wLjYtMC45LTAuNi0xLjVWNDAuNmgtOC41Yy0wLjksMC0xLjYtMC40LTItMS4zXHJcbiAgICAgICAgICAgICAgICBjLTAuNC0wLjktMC4yLTEuNiwwLjUtMi4zbDE0LjgtMTQuOGMwLjQtMC40LDAuOS0wLjYsMS41LTAuNnMxLjEsMC4yLDEuNSwwLjZMNjQuMywzN0M2NSwzNy43LDY1LjEsMzguNCw2NC44LDM5LjN6XCIvPlxyXG4gICAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJ1cGxvYWQtdGV4dFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj4iXX0=