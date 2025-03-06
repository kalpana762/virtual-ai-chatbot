// Examples of array operations in React

// Example 1: Removing an item by index
const messages = ["Hello", "Hi", "Greetings"];
const removeIndex = 1;

// ❌ Wrong way - direct mutation
messages.splice(removeIndex, 1);

// ✅ Correct way - immutably with filter
const newMessages = messages.filter((_, index) => index !== removeIndex);

// Example 2: Removing by condition (like an id)
const chatMessages = [
  { id: 1, text: "First Message" },
  { id: 2, text: "Second Message" }
];

const newChatMessages = chatMessages.filter(msg => msg.id !== 2);