# Angular Task Manager

Angular Task Manager is a browser-based task management learning project built with Angular 22. It demonstrates a dashboard, task CRUD workflows, client-side routing, signal-based state, reactive forms, and loading/error/empty states for a sample users API.

## Features

### Dashboard

- Shows total, pending, and completed task counts.
- Displays up to three pending tasks.
- Provides navigation to the task list and task creation form.

### Tasks

- View all tasks and task status.
- Search tasks by title.
- Filter tasks by all, pending, or completed status.
- Create tasks with a validated title.
- Edit an existing task title.
- Mark pending tasks as completed.
- Delete tasks.
- Shows empty states when there are no tasks or no search/filter matches.

Tasks currently live in an in-memory Angular signal in `TaskService`. They are sample data and are **not persisted**: refreshing the browser restores the initial sample tasks.

### Users API explorer

- Loads sample users from the public JSONPlaceholder API.
- Search users by name.
- Open a user detail page.
- Displays loading, error, and empty states.

The users area needs an internet connection to reach JSONPlaceholder. It is demonstration data, not a production user directory.

## Routes

| Path | Screen |
| --- | --- |
| `/` | Dashboard |
| `/tasks` | Task list with search and status filter |
| `/tasks/new` | Create task |
| `/tasks/:id/edit` | Edit task |
| `/tasks/:id` | Task-list component route |
| `/users` | Searchable users list from JSONPlaceholder |
| `/users/:id` | User details from JSONPlaceholder |

## Technology

- Angular 22 standalone components and Angular Router
- TypeScript
- Signals and computed signals for task and page state
- Reactive Forms for task creation and editing
- Angular `HttpClient` and RxJS for the sample users API
- SCSS
- Vitest with the Angular CLI for unit tests

## Project structure

```text
src/
├── app/
│   ├── app.component.*             # Root component
│   ├── app.config.ts               # Router and HttpClient providers
│   ├── app.routes.ts               # Lazy-loaded feature routes
│   ├── core/
│   │   └── services/
│   │       ├── task.service.ts     # In-memory signal-based task state
│   │       └── user.service.ts     # JSONPlaceholder API access
│   ├── features/
│   │   ├── dashboard/              # Summary and pending tasks
│   │   ├── tasks/
│   │   │   ├── components/         # Reusable task card
│   │   │   ├── models/             # Task type
│   │   │   └── pages/              # List, create, and edit screens
│   │   └── users/
│   │       ├── components/         # Reusable user card
│   │       ├── models/              # User type
│   │       └── pages/              # User list and detail screens
│   ├── shared/                     # Shared UI components
│   └── Pratice/                    # Practice component
├── main.ts                         # Angular bootstrap
└── styles.scss                     # Global styles
```

## Requirements

- Node.js compatible with the installed Angular CLI
- npm
- Internet access for the JSONPlaceholder users pages

## Run locally

From this project directory:

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200). Angular CLI serves the app locally and reloads it when source files change.

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

## Tests

```bash
npm test
```

Unit tests use Vitest through the Angular CLI.

## Current limitations

- Task changes exist only in memory and reset to sample tasks after a page refresh.
- The app has no login, backend task API, or database.
- User information comes from JSONPlaceholder and is read-only sample data.
- The `/tasks/:id` route currently loads the task-list component; a dedicated task detail screen is not implemented.

## Useful commands

```bash
npm start
npm run build
npm test
npx ng generate component component-name
```

See the [Angular CLI documentation](https://angular.dev/tools/cli) for more commands and framework guides.
