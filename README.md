<img width="1365" height="599" alt="image" src="https://github.com/user-attachments/assets/b6a1dd17-927b-4958-80ef-fa8a08e3d0a7" /># Daily-Focus-Tracker

## 🚀 Project Overview: Daily Focus & Audit Dashboard
A modern web application built with HTML5, CSS3, and Vanilla JavaScript that provides real-time visualization of productivity metrics. The dashboard features a "Time Warden" system that enforces a strict 24-hour daily limit, ensuring data integrity for time-tracking  along with a Zen Mode timer and weekly performance insights, enabling users to build consistent habits.

## ✨ Key Features
🔹 Time Warden System: Intelligent input logic that automatically adjusts sliders to prevent the total logged time from exceeding 24 hours.<br>
🔹 Dynamic Focus Scoring: A circular progress ring that calculates a productivity score based on the ratio of study time to total logged time.<br>
🔹 Distraction Analysis: A horizontal progress bar with a glowing glassmorphism effect that tracks Social Media and Entertainment consumption.<br>
🔹 Weekly Twin-Bar Chart: A full-width data visualization comparing focus levels vs. distraction levels across the last seven days.<br>
🔹 Dharma Insights (Smart Suggestions)<br>
Provides actionable insights such as:<br>
Reducing distractions<br>
Improving consistency<br>
Building better focus habits<br>
🔹 Zen Mode (Custom Timer)<br>
User-defined session duration<br>
Start / Pause / Reset controls<br>
Minimal distraction-free interface<br>
🔹 Focus Music <br>
Play calming focus music / ambient sounds<br>
Simple controls (Play / Pause)<br>
Designed to work with Zen Mode<br>
Helps improve deep work and concentration<br>
🔹 Responsive Glassmorphism UI: A sleek, dark-themed interface utilizing backdrop blurs, ambient background orbs, and CSS gradients.<br>

## 🛠️ Technical Stack
🛠️ Technical Stack<br>
Frontend: HTML5, CSS3 (Flexbox, Grid), JavaScript (ES6+)<br>
Styling & UI: Glassmorphism design, CSS Variables, Gradients, Backdrop Filters<br>
Icons: Feather Icons<br>
📊 Data Handling<br>
Storage: localStorage (client-side persistence)<br>
State Management: Vanilla JavaScript (DOM-based updates)<br>
📈 Visualization<br>
SVG Circular Progress Ring<br>
Custom-built Bar Charts (7-day analytics)<br>

## 📊 How It Works
🔹Input: Users adjust sliders for Study, Social Media, and Entertainment.<br>
🔹 Constraint: If the user tries to add a 13th hour of study when 12 hours of social media are already logged, the logic trims the other values to maintain the 24-hour cap.<br>
🔹 Storage<br>
Data is stored using localStorage<br>
Enables retrieval of weekly performance<br>
🔹 Output (Analytics)<br>
Dashboard updates instantly<br>
Weekly graph reflects user data<br>
Insights are generated based on performance<br>

## Visualization:
* Focus Ring: Turns green for high focus ($>70\%$), violet for moderate ($>40\%$), and red for high distraction.
* Twin Bars: The chart updates "Today's" data point in real-time without refreshing the page.
* Analytics Dashboard: Displays weekly focus and distraction trends, Shows average focus score and peak performance day, Provides smart suggestions (Dharma Insights) based on user performance.


<img width="1365" height="599" alt="image" src="https://github.com/user-attachments/assets/fcd6fd8c-a978-4752-8cc9-2c03a577fcac" />


<img width="1365" height="608" alt="Screenshot 2026-02-15 105143" src="https://github.com/user-attachments/assets/b8582d54-51c8-4e2b-a537-06f87a0fba2b" />
