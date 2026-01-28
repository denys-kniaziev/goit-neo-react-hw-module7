# Woolf University. React Course. Homework – Async Redux &amp; Memoization

## Overview

Refactor the **Contacts app** (see https://github.com/denys-kniaziev/goit-neo-react-hw-module6) to use **async Redux logic** instead of local storage persistence.

* Remove **Redux Persist**
* Store contacts on a backend via HTTP
* Add loading, error handling, and memoized selectors

---

## Redux State Shape

```js
{
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
    name: ""
  }
}
```

---

## Async Operations

Create `contactsOps.js` and define async thunks using `createAsyncThunk`:

* `fetchContacts` – GET all contacts
* `addContact` – POST new contact
* `deleteContact` – DELETE contact by id

Requirements:

* Use `axios`
* Wrap requests in `try/catch`
* On error return `thunkAPI.rejectWithValue(...)`

---

## Contacts Slice (`contactsSlice.js`)

* Created with `createSlice`
* No `reducers` field
* Handle async actions in `extraReducers`
* Handle `pending`, `fulfilled`, `rejected` for all operations
* Export reducer

### Selectors

* `selectContacts`
* `selectLoading`
* `selectError`

---

## Filters Slice (`filtersSlice.js`)

* State: `{ name: "" }`
* Action: `changeFilter`
* Selector: `selectNameFilter`

---

## Memoized Selector

To avoid unnecessary recalculations, create a memoized selector:

* `selectFilteredContacts`
* Built with `createSelector`
* Depends only on:

  * contacts list
  * name filter
* Used in `ContactList` via `useSelector`

---

## React Integration

* Use `useDispatch` and `useSelector`
* Components do **not** receive props (except contact item)
* `ContactList` uses `selectFilteredContacts`
* No manual `.filter()` in components

---

## App Behavior

* On app mount:

  * Dispatch `fetchContacts`
* Backend generates contact IDs
* No localStorage usage

---

## Store Setup (`store.js`)

* Use `configureStore`
* Combine `contacts` and `filters` reducers
* No `persistReducer`
* Export `store`

---

## main.jsx

* Wrap `<App />` with `<Provider store={store}>`
* No `PersistGate`
