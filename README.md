# ABC Book

[View Live](https://abc-book-club.herokuapp.com/)

## Credentials

| username | password |   role |
| -------- | :------: | -----: |
| Ben      |   123    |  admin |
| Dave     |   123    |   user |
| Eldon    |   123    | editor |

## Store

Redux store is set up with reference to the documentation. The store consists of the following reducers:

-   `users` - Contains logic pertaining to listing and sorting of users, as well as admin functions to modify users. Also keeps track of books borrowed
-   `auth` - Used to verify login and facilitate logout
-   `books` - Logic for adding, editing, borrowing and returning a book

## Project Structure

```
project
│   build
│   node_modules
│   public
│   src
|   └───app
│   |    └───data
│   |    |     └───books.ts
|   |    |     └───users.ts
│   |    └───hooks.ts
|   |    └───store.ts
│   └───components // reusable components
│   └───features // reducer logic and actions
│   |       └───auth
|   |       └───books
|   |       └───users
|   └───pages
|   |   |  └───utils
|   |   └───Book.tsx
|   |   └───Books.tsx
|   |   └───Home.tsx // etc.
|   └───types
|   |     └───Book.ts
|   |     └───User.ts
|   └───utils
|   └───App.tsx
|   └───index.tsx
|   └───theme.ts
```

## Code Implementation

-   Started out by generating dummy data (users)
-   Add route and corresponding pages whenever needed
-   Worked on listing, sorting and filtering of users
    -   To do this, had to set up reducers
-   Implemented "auth" in order to work on next part (create, remove, update, delete)
-   Worked on listing of books
-   Worked on graph & chart to make homepage look nicer
-   Finished with book operations that consisted of some kind of "join" operation (borrowed book belongs to user, last borrowed by, etc.)

## Scalability

Logic in reducers are kept to a minimum. Minimize code in `pages` by shipping out some logic to `components`. Use `utils` for any code that does not need to have access to `state`
