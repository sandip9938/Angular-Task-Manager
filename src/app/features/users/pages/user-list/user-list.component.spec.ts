import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserListPage } from './user-list.component';
import { UserService } from '../../../../core/services/user.service';

describe('UserListPage', () => {
  let fixture: ComponentFixture<UserListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListPage],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsers: () =>
              of([
                { id: 1, name: 'Leanne Graham', email: 'leanne@example.com', phone: '1-770-736-8031 x56442' },
                { id: 2, name: 'Ervin Howell', email: 'ervin@example.com', phone: '010-692-6593 x09125' },
              ]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListPage);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should render users and filter by name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Leanne Graham');

    const input = compiled.querySelector('input[type="search"]') as HTMLInputElement;
    input.value = 'ervin';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Ervin Howell');
    expect(compiled.textContent).not.toContain('Leanne Graham');
  });
});
