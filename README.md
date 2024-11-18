💻 Code Overview
The main component is ModernHealthcareDashboard. It manages state for:

name: Patient name (string).
age: Patient age (0-100, selected from a dropdown).
file: Uploaded file (optional).
isSubmitting: Indicates form submission status.
submitMessage: Confirmation message after submission.
activeTab: Determines whether the Input or Summary view is active.
records: Array of patient records (name, age, and file).
Key Functions
handleSubmit: Handles form submission, validates input, and updates the records.
handleDelete: Deletes a record based on its unique id.
setActiveTab: Switches between input and summary tabs.
🛡️ Input Validation
The form fields for name and age are required.
Age must be selected from a dropdown list (0-100).
The form will not submit unless all required fields are filled.
🌟 Animations
The application uses Framer Motion for:

Page transitions.
Button hover and click effects.
Form and summary animations.
🖼️ Screenshots
Input Form

Summary View

🐛 Known Issues
The file upload field currently only displays the file name and does not handle file uploads beyond that.
🚧 Future Improvements
Add form validation for file types and sizes.
Enhance the file upload feature to allow previewing files.
Add a backend API for persistent data storage.
Implement search and filter functionalities for the summary records.
🤝 Contributing
Contributions are welcome! Please follow the standard GitHub flow:

Fork the repository.
Create a new feature branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add feature').
Push to the branch (git push origin feature-name).
Create a Pull Request.
📝 License
This project is licensed under the MIT License. See the LICENSE file for more information.

👨‍💻 Author
Vilok Masuti - LinkedIn | Portfolio
