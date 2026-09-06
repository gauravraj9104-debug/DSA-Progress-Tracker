const dsaData = [
    {
        name: "Arrays",
        topics: [
            "Array Basics",
            "Array Traversal",
            "Insertion",
            "Deletion",
            "Searching",
            "Prefix Sum",
            "Two Pointers",
            "Sliding Window",
            "Kadane's Algorithm",
            "2D Arrays"
        ]
    },
    {
        name: "Strings",
        topics: [
            "String Basics",
            "String Traversal",
            "Character Frequency",
            "Palindrome",
            "Anagram",
            "String Reversal",
            "Substrings",
            "Two Pointer Problems",
            "Sliding Window",
            "String Sorting"
        ]
    },
    {
        name: "Trees",
        topics: [
            "Tree Basics",
            "Binary Tree",
            "Tree Traversal",
            "Preorder Traversal",
            "Inorder Traversal",
            "Postorder Traversal",
            "Level Order Traversal",
            "Height of Tree",
            "Balanced Tree",
            "Binary Search Tree"
        ]
    }
];

const tracker = document.getElementById("tracker");

function getProgress(topicId) {
    return localStorage.getItem(topicId) === "true";
}

function toggleTopic(topicId) {
    const currentStatus = getProgress(topicId);

    localStorage.setItem(topicId, !currentStatus);

    renderTracker();
}

function renderTracker() {

    tracker.innerHTML = "";

    let totalTopics = 0;
    let completedTopics = 0;

    dsaData.forEach((category, categoryIndex) => {

        const card = document.createElement("div");
        card.className = "progress-card";

        const completed = category.topics.filter((topic, topicIndex) => {
            return getProgress(`category-${categoryIndex}-topic-${topicIndex}`);
        }).length;

        const total = category.topics.length;

        const percentage = Math.round((completed / total) * 100);

        totalTopics += total;
        completedTopics += completed;

        card.innerHTML = `
            <div class="topic-header">
                <h2>${category.name}</h2>
                <span>${percentage}%</span>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>

            <p>${completed} / ${total} completed</p>

            <div class="topics">
                ${category.topics.map((topic, topicIndex) => {

                    const topicId =
                        `category-${categoryIndex}-topic-${topicIndex}`;

                    const checked = getProgress(topicId);

                    return `
                        <label class="topic">
                            <input
                                type="checkbox"
                                ${checked ? "checked" : ""}
                                onchange="toggleTopic('${topicId}')"
                            >

                            <span>${topic}</span>
                        </label>
                    `;

                }).join("")}
            </div>
        `;

        tracker.appendChild(card);
    });

    const overallPercentage =
        totalTopics === 0
            ? 0
            : Math.round((completedTopics / totalTopics) * 100);

    document.getElementById("overallPercentage").textContent =
        `${overallPercentage}%`;

    document.getElementById("overallCompleted").textContent =
        `${completedTopics} / ${totalTopics} completed`;
}

renderTracker();
