 # Responsibility
 You are an experienced Pure React developer with strong expertise in code optimization and performance improvement.
You are responsible for implementing assigned functionalities with clean, efficient, and maintainable code.
Ensure that all implementations handle edge cases effectively and meet production-quality standards.

# Input

## Search UI Analysis & Implementation

Refer to the Material UI documentation and analyze the Search UI in terms of its appearance, flow, and functionality.
The Search component is located at the top-right corner of the page:
🔗 MUI Supported Components -  https://mui.com/material-ui/getting-started/supported-components/

Begin by analyzing the /App.tsx file to understand the component structure and data flow.
While implementing a similar Search UI appearance and behavior, use Syncfusion Pure React components instead of Material UI components.

For example:

If the UI includes a Button, use the Syncfusion Pure React Button as shown here:
🔗 Syncfusion Button Example - https://react.syncfusion.com/button#icon-and-label

Follow this approach for other UI components as well to ensure consistency with the Pure React implementation.

---

## ⚙️ **Search Functionality Implementation — Do’s and Don’ts**

### ✅ **Do’s**

1. **Follow the MUI reference flow:**

   * Analyze the [MUI Supported Components](https://mui.com/material-ui/getting-started/supported-components/) page for **Search UI behavior and placement**.
   * Understand the appearance and interaction pattern before starting implementation.

2. **Use Syncfusion Pure React Components:**

   * Replace all MUI components with **Syncfusion Pure React equivalents**.
   * Example: for buttons, use [Syncfusion Button](https://react.syncfusion.com/button#icon-and-label).
   * Maintain consistent styling and behavior across components (Button, Dialog, Input, etc.).

3. **Implement the Search Component Cleanly:**

   * Create a dedicated component named **`Search`** for logic and UI separation.
   * Keep the topbar Search button in `App.tsx` and open a **Syncfusion Dialog** for the search interface.
   * Use **controlled components** for input handling.

4. **Ensure Live Search Functionality:**

   * Trigger the search operation on **each keystroke** (real-time updates).
   * Match search queries with **titles and subheadings** dynamically.
   * Display results directly below the input inside the dialog.

5. **Focus on Performance Optimization:**

   * Debounce input events to prevent unnecessary re-renders.
   * Use **memoization** (`React.memo`, `useCallback`, `useMemo`) for stable renders.
   * Avoid redundant state updates.

6. **Maintain Clean and Readable Code:**

   * Follow component-based structure.
   * Use descriptive names for variables, functions, and components.
   * Add brief inline comments for complex logic or edge case handling.

7. **Handle Edge Cases Gracefully:**

   * Empty input → show no results or “No results found” message.
   * Case-insensitive search.
   * Trim leading/trailing spaces from user input.

### ❌ **Don’ts**

1. **Don’t use Material UI or third-party paid plugins** (like Algolia DocSearch).

   * All components must come from **Syncfusion Pure React**.

2. **Don’t hardcode data or static results.**

   * The search should dynamically match documentation data (titles, subtitles, or relevant JSON content).

3. **Don’t block UI updates.**

   * Avoid synchronous loops or heavy computations during search filtering.

4. **Don’t duplicate logic** inside `App.tsx`.

   * Keep all search logic within the `Search` component for reusability and maintainability.

5. **Don’t forget responsiveness.**

   * Ensure the search dialog and results adapt properly to different screen sizes.

6. **Don’t skip accessibility and usability basics.**

   * Add proper ARIA labels for inputs and buttons.
   * Maintain keyboard navigation and focus control inside the dialog.


 # Goals:

 Implement the Search UI appearance in ./App.tsx (topbar) using Syncfusion Pure React components.
Create a dedicated Search component named Search that manages both the UI and search functionality.

## Expected UI Flow

1. The Search button should appear on the topbar, aligned to the right side.

2. On clicking the Search button, a Syncfusion Pure React Dialog should open.

3. Inside this dialog:

4. Render a Search Input component.

5. The input should perform a live search operation on titles and subheadings.

Example: typing "button" should display all results where the word “button” appears in the title or subheadings.

6. Display the search results dynamically below the input field, updating with each keystroke.

🔗 Reference: Syncfusion Button Example - https://react.syncfusion.com/button#icon-and-label

 Now we need implement that Search UI appearance on './App.tsx' in topbar using Syncfusion Pure React component, and should create the search functionality in search component and name is Search.

