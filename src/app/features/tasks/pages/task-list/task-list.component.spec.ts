import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { TaskList } from './task-list.component';

describe('TaskList', () => {
  let component: TaskList;
  let fixture: ComponentFixture<TaskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskList],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({ category: 'Study' }),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the category filter from the URL and combine it with search and status', () => {
    const categoryFilter = fixture.nativeElement.querySelector(
      '#task-category',
    ) as HTMLSelectElement;
    const searchInput = fixture.nativeElement.querySelector('#task-search') as HTMLInputElement;
    const statusFilter = fixture.nativeElement.querySelector('#task-status') as HTMLSelectElement;

    expect(categoryFilter.value).toBe('Study');
    expect(fixture.nativeElement.querySelectorAll('app-task-card').length).toBe(2);

    searchInput.value = 'review';
    searchInput.dispatchEvent(new Event('input'));
    statusFilter.value = 'pending';
    statusFilter.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const taskCards = fixture.nativeElement.querySelectorAll('app-task-card');
    expect(taskCards.length).toBe(1);
    expect(taskCards[0].textContent).toContain('Review notes');
  });
});
