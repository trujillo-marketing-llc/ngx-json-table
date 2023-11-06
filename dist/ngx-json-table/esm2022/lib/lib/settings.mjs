export const iconsPackages = {
    basic: {
        notSorted: { html: '<span class="ngx-json-table-icon">&#8693;</span>' },
        sortedAsc: { html: '<span class="ngx-json-table-icon">&#10515;</span>' },
        sortedDesc: { html: '<span class="ngx-json-table-icon">&#10514;</span>' },
        expand: { html: '<span class="ngx-json-table-icon">&#8853;</span>' },
        collapse: { html: '<span class="ngx-json-table-icon">&#8854;</span>' },
        simpleChild: { html: '<span class="ngx-json-table-icon">&#62;</span>' },
        addChild: { html: '<span class="ngx-json-table-icon" style="color: green; cursor: pointer">&#8853;</span>' },
        editChild: { html: '<span class="ngx-json-table-icon" style="color: orange; cursor: pointer">&#10000;</span>' },
        confirmEditChild: { html: '<span class="ngx-json-table-icon" style="color: green; cursor: pointer">&#10162;</span>' },
        cancelEditChild: { html: '<span class="ngx-json-table-icon" style="color: indianred; cursor: pointer">&#8855;</span>' },
        deleteChild: { html: '<span class="ngx-json-table-icon" style="color: indianred; cursor: pointer">&#8861;</span>' },
        uploadFile: { html: `<span class="ngx-json-table-icon" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-upload" class="svg-inline--fa fa-file-upload fa-w-12" role="img" viewBox="0 0 384 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"/></svg></span>` },
    },
    'font-awesome': {
        notSorted: { class: 'fa fa-sort' },
        sortedAsc: { class: 'fa fa-sort-amount-asc' },
        sortedDesc: { class: 'fa fa-sort-amount-desc' },
        expand: { class: 'fa fa-plus-circle' },
        collapse: { class: 'fa fa-minus-circle' },
        simpleChild: { class: 'fa fa-angle-right' },
        addChild: {
            class: 'fa fa-plus-circle',
            color: 'green'
        },
        editChild: {
            class: 'fa fa-pencil',
            color: 'orange'
        },
        confirmEditChild: {
            class: 'fa fa-check-circle',
            color: 'green'
        },
        cancelEditChild: {
            class: 'fa fa-times-circle',
            color: 'indianred'
        },
        deleteChild: {
            class: 'fa fa-minus-circle',
            color: 'indianred'
        },
        uploadFile: { class: 'fa fa-upload' }
    },
    'material-design': {
        notSorted: {
            class: 'material-icons',
            innerText: 'swap_vert'
        },
        sortedAsc: {
            class: 'material-icons',
            innerText: 'trending_up'
        },
        sortedDesc: {
            class: 'material-icons',
            innerText: 'trending_down'
        },
        expand: {
            class: 'material-icons',
            innerText: 'control_point'
        },
        collapse: {
            class: 'material-icons',
            innerText: 'remove_circle_outline'
        },
        simpleChild: {
            class: 'material-icons',
            innerText: 'keyboard_arrow_right'
        },
        addChild: {
            class: 'material-icons',
            innerText: 'add_circle',
            color: 'green'
        },
        editChild: {
            class: 'material-icons',
            innerText: 'create',
            color: 'orange'
        },
        confirmEditChild: {
            class: 'material-icons',
            innerText: 'check_circle',
            color: 'green'
        },
        cancelEditChild: {
            class: 'material-icons',
            innerText: 'cancel',
            color: 'indianred'
        },
        deleteChild: {
            class: 'material-icons',
            innerText: 'remove_circle',
            color: 'indianred'
        },
        uploadFile: {
            class: 'material-icons',
            innerText: 'backup',
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtanNvbi10YWJsZS9zcmMvbGliL2xpYi9zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtREEsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFrQjtJQUMxQyxLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsa0RBQWtELEVBQUM7UUFDckUsU0FBUyxFQUFFLEVBQUMsSUFBSSxFQUFFLG1EQUFtRCxFQUFDO1FBQ3RFLFVBQVUsRUFBRSxFQUFDLElBQUksRUFBRSxtREFBbUQsRUFBQztRQUN2RSxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsa0RBQWtELEVBQUM7UUFDbEUsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLGtEQUFrRCxFQUFDO1FBQ3BFLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSxnREFBZ0QsRUFBQztRQUNyRSxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsd0ZBQXdGLEVBQUM7UUFDMUcsU0FBUyxFQUFFLEVBQUMsSUFBSSxFQUFFLDBGQUEwRixFQUFDO1FBQzdHLGdCQUFnQixFQUFFLEVBQUMsSUFBSSxFQUFFLHlGQUF5RixFQUFDO1FBQ25ILGVBQWUsRUFBRSxFQUFDLElBQUksRUFBRSw0RkFBNEYsRUFBQztRQUNySCxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsNEZBQTRGLEVBQUM7UUFDakgsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFFLG1yQkFBbXJCLEVBQUM7S0FDeHNCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBQztRQUNoQyxTQUFTLEVBQUUsRUFBQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUM7UUFDM0MsVUFBVSxFQUFFLEVBQUMsS0FBSyxFQUFFLHdCQUF3QixFQUFDO1FBQzdDLE1BQU0sRUFBRSxFQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBQztRQUNwQyxRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUUsb0JBQW9CLEVBQUM7UUFDdkMsV0FBVyxFQUFFLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxtQkFBbUI7WUFDMUIsS0FBSyxFQUFFLE9BQU87U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxjQUFjO1lBQ3JCLEtBQUssRUFBRSxRQUFRO1NBQ2hCO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixLQUFLLEVBQUUsT0FBTztTQUNmO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixLQUFLLEVBQUUsV0FBVztTQUNuQjtRQUNELFdBQVcsRUFBRTtZQUNYLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsS0FBSyxFQUFFLFdBQVc7U0FDbkI7UUFDRCxVQUFVLEVBQUUsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFDO0tBQ3BDO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixTQUFTLEVBQUUsV0FBVztTQUN2QjtRQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLGFBQWE7U0FDekI7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFNBQVMsRUFBRSxlQUFlO1NBQzNCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixTQUFTLEVBQUUsZUFBZTtTQUMzQjtRQUNELFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLHVCQUF1QjtTQUNuQztRQUNELFdBQVcsRUFBRTtZQUNYLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLHNCQUFzQjtTQUNsQztRQUNELFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLFlBQVk7WUFDdkIsS0FBSyxFQUFFLE9BQU87U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsS0FBSyxFQUFFLFFBQVE7U0FDaEI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFNBQVMsRUFBRSxjQUFjO1lBQ3pCLEtBQUssRUFBRSxPQUFPO1NBQ2Y7UUFDRCxlQUFlLEVBQUU7WUFDZixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLEtBQUssRUFBRSxXQUFXO1NBQ25CO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixTQUFTLEVBQUUsZUFBZTtZQUMxQixLQUFLLEVBQUUsV0FBVztTQUNuQjtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLFFBQVE7U0FDcEI7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBTZXR0aW5ncyA9IHtcbiAga2V5Pzoge1xuICAgIGhlYWRlclRleHQ/OiBzdHJpbmc7XG4gICAgd2lkdGg/OiBzdHJpbmc7XG4gIH07XG4gIHZhbHVlPzoge1xuICAgIGhlYWRlclRleHQ/OiBzdHJpbmc7XG4gICAgd2lkdGg/OiBzdHJpbmc7XG4gIH07XG4gIG9wdGlvbnM/OiB7XG4gICAgYWRkPzogYm9vbGVhbixcbiAgICBlZGl0Pzoge1xuICAgICAga2V5PzogYm9vbGVhbixcbiAgICAgIHZhbHVlPzogYm9vbGVhblxuICAgIH0sXG4gICAgZGVsZXRlPzogYm9vbGVhblxuICB9O1xuICBzb3J0YWJsZT86IGJvb2xlYW47XG4gIHNvcnREaXJlY3Rpb24/OiBTb3J0VHlwZTtcbiAgZXhwYW5kQWxsPzogYm9vbGVhbjtcbiAgbG9hZEZyb21GaWxlPzogYm9vbGVhbjtcbiAgaWNvblBhY2thZ2U/OiAnYmFzaWMnIHwgJ2ZvbnQtYXdlc29tZScgfCAnbWF0ZXJpYWwtZGVzaWduJztcbiAgaWNvbnM/OiBJY29ucztcbn07XG5cbmV4cG9ydCB0eXBlIEljb25zID0ge1xuICBub3RTb3J0ZWQ/OiBJY29uO1xuICBzb3J0ZWRBc2M/OiBJY29uO1xuICBzb3J0ZWREZXNjPzogSWNvbjtcbiAgZXhwYW5kPzogSWNvbjtcbiAgY29sbGFwc2U/OiBJY29uO1xuICBzaW1wbGVDaGlsZD86IEljb247XG4gIGFkZENoaWxkPzogSWNvbjtcbiAgZWRpdENoaWxkPzogSWNvbjtcbiAgY29uZmlybUVkaXRDaGlsZD86IEljb247XG4gIGNhbmNlbEVkaXRDaGlsZD86IEljb247XG4gIGRlbGV0ZUNoaWxkPzogSWNvbjtcbiAgdXBsb2FkRmlsZT86IEljb247XG59O1xuXG5leHBvcnQgdHlwZSBJY29uID0ge1xuICBpbm5lclRleHQ/OiBzdHJpbmc7XG4gIGNsYXNzPzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbiAgaHRtbD86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFNvcnRUeXBlID0gJ2FzYycgfCAnZGVzYyc7XG5cbmV4cG9ydCB0eXBlIEljb25zUGFja2FnZXMgPSB7IFtuYW1lOiBzdHJpbmddOiBJY29ucyB9O1xuXG5leHBvcnQgY29uc3QgaWNvbnNQYWNrYWdlczogSWNvbnNQYWNrYWdlcyA9IHtcbiAgYmFzaWM6IHtcbiAgICBub3RTb3J0ZWQ6IHtodG1sOiAnPHNwYW4gY2xhc3M9XCJuZ3gtanNvbi10YWJsZS1pY29uXCI+JiM4NjkzOzwvc3Bhbj4nfSxcbiAgICBzb3J0ZWRBc2M6IHtodG1sOiAnPHNwYW4gY2xhc3M9XCJuZ3gtanNvbi10YWJsZS1pY29uXCI+JiMxMDUxNTs8L3NwYW4+J30sXG4gICAgc29ydGVkRGVzYzoge2h0bWw6ICc8c3BhbiBjbGFzcz1cIm5neC1qc29uLXRhYmxlLWljb25cIj4mIzEwNTE0Ozwvc3Bhbj4nfSxcbiAgICBleHBhbmQ6IHtodG1sOiAnPHNwYW4gY2xhc3M9XCJuZ3gtanNvbi10YWJsZS1pY29uXCI+JiM4ODUzOzwvc3Bhbj4nfSxcbiAgICBjb2xsYXBzZToge2h0bWw6ICc8c3BhbiBjbGFzcz1cIm5neC1qc29uLXRhYmxlLWljb25cIj4mIzg4NTQ7PC9zcGFuPid9LFxuICAgIHNpbXBsZUNoaWxkOiB7aHRtbDogJzxzcGFuIGNsYXNzPVwibmd4LWpzb24tdGFibGUtaWNvblwiPiYjNjI7PC9zcGFuPid9LFxuICAgIGFkZENoaWxkOiB7aHRtbDogJzxzcGFuIGNsYXNzPVwibmd4LWpzb24tdGFibGUtaWNvblwiIHN0eWxlPVwiY29sb3I6IGdyZWVuOyBjdXJzb3I6IHBvaW50ZXJcIj4mIzg4NTM7PC9zcGFuPid9LFxuICAgIGVkaXRDaGlsZDoge2h0bWw6ICc8c3BhbiBjbGFzcz1cIm5neC1qc29uLXRhYmxlLWljb25cIiBzdHlsZT1cImNvbG9yOiBvcmFuZ2U7IGN1cnNvcjogcG9pbnRlclwiPiYjMTAwMDA7PC9zcGFuPid9LFxuICAgIGNvbmZpcm1FZGl0Q2hpbGQ6IHtodG1sOiAnPHNwYW4gY2xhc3M9XCJuZ3gtanNvbi10YWJsZS1pY29uXCIgc3R5bGU9XCJjb2xvcjogZ3JlZW47IGN1cnNvcjogcG9pbnRlclwiPiYjMTAxNjI7PC9zcGFuPid9LFxuICAgIGNhbmNlbEVkaXRDaGlsZDoge2h0bWw6ICc8c3BhbiBjbGFzcz1cIm5neC1qc29uLXRhYmxlLWljb25cIiBzdHlsZT1cImNvbG9yOiBpbmRpYW5yZWQ7IGN1cnNvcjogcG9pbnRlclwiPiYjODg1NTs8L3NwYW4+J30sXG4gICAgZGVsZXRlQ2hpbGQ6IHtodG1sOiAnPHNwYW4gY2xhc3M9XCJuZ3gtanNvbi10YWJsZS1pY29uXCIgc3R5bGU9XCJjb2xvcjogaW5kaWFucmVkOyBjdXJzb3I6IHBvaW50ZXJcIj4mIzg4NjE7PC9zcGFuPid9LFxuICAgIHVwbG9hZEZpbGU6IHtodG1sOiBgPHNwYW4gY2xhc3M9XCJuZ3gtanNvbi10YWJsZS1pY29uXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImZpbGUtdXBsb2FkXCIgY2xhc3M9XCJzdmctaW5saW5lLS1mYSBmYS1maWxlLXVwbG9hZCBmYS13LTEyXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgMzg0IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyNCAxMzZWMEgyNEMxMC43IDAgMCAxMC43IDAgMjR2NDY0YzAgMTMuMyAxMC43IDI0IDI0IDI0aDMzNmMxMy4zIDAgMjQtMTAuNyAyNC0yNFYxNjBIMjQ4Yy0xMy4yIDAtMjQtMTAuOC0yNC0yNHptNjUuMTggMjE2LjAxSDIyNHY4MGMwIDguODQtNy4xNiAxNi0xNiAxNmgtMzJjLTguODQgMC0xNi03LjE2LTE2LTE2di04MEg5NC44MmMtMTQuMjggMC0yMS40MS0xNy4yOS0xMS4yNy0yNy4zNmw5Ni40Mi05NS43YzYuNjUtNi42MSAxNy4zOS02LjYxIDI0LjA0IDBsOTYuNDIgOTUuN2MxMC4xNSAxMC4wNyAzLjAzIDI3LjM2LTExLjI1IDI3LjM2ek0zNzcgMTA1TDI3OS4xIDdjLTQuNS00LjUtMTAuNi03LTE3LTdIMjU2djEyOGgxMjh2LTYuMWMwLTYuMy0yLjUtMTIuNC03LTE2Ljl6XCIvPjwvc3ZnPjwvc3Bhbj5gfSxcbiAgfSxcbiAgJ2ZvbnQtYXdlc29tZSc6IHtcbiAgICBub3RTb3J0ZWQ6IHtjbGFzczogJ2ZhIGZhLXNvcnQnfSxcbiAgICBzb3J0ZWRBc2M6IHtjbGFzczogJ2ZhIGZhLXNvcnQtYW1vdW50LWFzYyd9LFxuICAgIHNvcnRlZERlc2M6IHtjbGFzczogJ2ZhIGZhLXNvcnQtYW1vdW50LWRlc2MnfSxcbiAgICBleHBhbmQ6IHtjbGFzczogJ2ZhIGZhLXBsdXMtY2lyY2xlJ30sXG4gICAgY29sbGFwc2U6IHtjbGFzczogJ2ZhIGZhLW1pbnVzLWNpcmNsZSd9LFxuICAgIHNpbXBsZUNoaWxkOiB7Y2xhc3M6ICdmYSBmYS1hbmdsZS1yaWdodCd9LFxuICAgIGFkZENoaWxkOiB7XG4gICAgICBjbGFzczogJ2ZhIGZhLXBsdXMtY2lyY2xlJyxcbiAgICAgIGNvbG9yOiAnZ3JlZW4nXG4gICAgfSxcbiAgICBlZGl0Q2hpbGQ6IHtcbiAgICAgIGNsYXNzOiAnZmEgZmEtcGVuY2lsJyxcbiAgICAgIGNvbG9yOiAnb3JhbmdlJ1xuICAgIH0sXG4gICAgY29uZmlybUVkaXRDaGlsZDoge1xuICAgICAgY2xhc3M6ICdmYSBmYS1jaGVjay1jaXJjbGUnLFxuICAgICAgY29sb3I6ICdncmVlbidcbiAgICB9LFxuICAgIGNhbmNlbEVkaXRDaGlsZDoge1xuICAgICAgY2xhc3M6ICdmYSBmYS10aW1lcy1jaXJjbGUnLFxuICAgICAgY29sb3I6ICdpbmRpYW5yZWQnXG4gICAgfSxcbiAgICBkZWxldGVDaGlsZDoge1xuICAgICAgY2xhc3M6ICdmYSBmYS1taW51cy1jaXJjbGUnLFxuICAgICAgY29sb3I6ICdpbmRpYW5yZWQnXG4gICAgfSxcbiAgICB1cGxvYWRGaWxlOiB7Y2xhc3M6ICdmYSBmYS11cGxvYWQnfVxuICB9LFxuICAnbWF0ZXJpYWwtZGVzaWduJzoge1xuICAgIG5vdFNvcnRlZDoge1xuICAgICAgY2xhc3M6ICdtYXRlcmlhbC1pY29ucycsXG4gICAgICBpbm5lclRleHQ6ICdzd2FwX3ZlcnQnXG4gICAgfSxcbiAgICBzb3J0ZWRBc2M6IHtcbiAgICAgIGNsYXNzOiAnbWF0ZXJpYWwtaWNvbnMnLFxuICAgICAgaW5uZXJUZXh0OiAndHJlbmRpbmdfdXAnXG4gICAgfSxcbiAgICBzb3J0ZWREZXNjOiB7XG4gICAgICBjbGFzczogJ21hdGVyaWFsLWljb25zJyxcbiAgICAgIGlubmVyVGV4dDogJ3RyZW5kaW5nX2Rvd24nXG4gICAgfSxcbiAgICBleHBhbmQ6IHtcbiAgICAgIGNsYXNzOiAnbWF0ZXJpYWwtaWNvbnMnLFxuICAgICAgaW5uZXJUZXh0OiAnY29udHJvbF9wb2ludCdcbiAgICB9LFxuICAgIGNvbGxhcHNlOiB7XG4gICAgICBjbGFzczogJ21hdGVyaWFsLWljb25zJyxcbiAgICAgIGlubmVyVGV4dDogJ3JlbW92ZV9jaXJjbGVfb3V0bGluZSdcbiAgICB9LFxuICAgIHNpbXBsZUNoaWxkOiB7XG4gICAgICBjbGFzczogJ21hdGVyaWFsLWljb25zJyxcbiAgICAgIGlubmVyVGV4dDogJ2tleWJvYXJkX2Fycm93X3JpZ2h0J1xuICAgIH0sXG4gICAgYWRkQ2hpbGQ6IHtcbiAgICAgIGNsYXNzOiAnbWF0ZXJpYWwtaWNvbnMnLFxuICAgICAgaW5uZXJUZXh0OiAnYWRkX2NpcmNsZScsXG4gICAgICBjb2xvcjogJ2dyZWVuJ1xuICAgIH0sXG4gICAgZWRpdENoaWxkOiB7XG4gICAgICBjbGFzczogJ21hdGVyaWFsLWljb25zJyxcbiAgICAgIGlubmVyVGV4dDogJ2NyZWF0ZScsXG4gICAgICBjb2xvcjogJ29yYW5nZSdcbiAgICB9LFxuICAgIGNvbmZpcm1FZGl0Q2hpbGQ6IHtcbiAgICAgIGNsYXNzOiAnbWF0ZXJpYWwtaWNvbnMnLFxuICAgICAgaW5uZXJUZXh0OiAnY2hlY2tfY2lyY2xlJyxcbiAgICAgIGNvbG9yOiAnZ3JlZW4nXG4gICAgfSxcbiAgICBjYW5jZWxFZGl0Q2hpbGQ6IHtcbiAgICAgIGNsYXNzOiAnbWF0ZXJpYWwtaWNvbnMnLFxuICAgICAgaW5uZXJUZXh0OiAnY2FuY2VsJyxcbiAgICAgIGNvbG9yOiAnaW5kaWFucmVkJ1xuICAgIH0sXG4gICAgZGVsZXRlQ2hpbGQ6IHtcbiAgICAgIGNsYXNzOiAnbWF0ZXJpYWwtaWNvbnMnLFxuICAgICAgaW5uZXJUZXh0OiAncmVtb3ZlX2NpcmNsZScsXG4gICAgICBjb2xvcjogJ2luZGlhbnJlZCdcbiAgICB9LFxuICAgIHVwbG9hZEZpbGU6IHtcbiAgICAgIGNsYXNzOiAnbWF0ZXJpYWwtaWNvbnMnLFxuICAgICAgaW5uZXJUZXh0OiAnYmFja3VwJyxcbiAgICB9XG4gIH0sXG59O1xuIl19