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
        name: "Linked List",
        topics: [
            "Linked List Basics",
            "Traversal",
            "Insertion",
            "Deletion",
            "Reverse Linked List",
            "Find Middle Node",
            "Detect Cycle",
            "Merge Two Sorted Lists"
        ]
    },

    {
        name: "Stack",
        topics: [
            "Stack Basics",
            "Stack Using Array",
            "Stack Using Linked List",
            "Balanced Parentheses",
            "Next Greater Element",
            "Infix to Postfix",
            "Min Stack"
        ]
    },

    {
        name: "Queue",
        topics: [
            "Queue Basics",
            "Queue Using Array",
            "Circular Queue",
            "Queue Using Stack",
            "Deque",
            "Priority Queue"
        ]
    },

    {
        name: "Hashing",
        topics: [
            "Hashing Basics",
            "Hash Map",
            "Hash Set",
            "Frequency Counting",
            "Two Sum",
            "Duplicate Elements",
            "Longest Consecutive Sequence"
        ]
    },

    {
        name: "Recursion",
        topics: [
            "Recursion Basics",
            "Base Case",
            "Recursive Factorial",
            "Fibonacci",
            "Recursive Array Problems",
            "Recursive String Problems",
            "Recursion Tree"
        ]
    },

    {
        name: "Sorting",
        topics: [
            "Sorting Basics",
            "Bubble Sort",
            "Selection Sort",
            "Insertion Sort",
            "Merge Sort",
            "Quick Sort",
            "Counting Sort",
            "Sorting Complexities"
        ]
    },

    {
        name: "Searching",
        topics: [
            "Linear Search",
            "Binary Search",
            "Binary Search on Answer",
            "Lower Bound",
            "Upper Bound",
            "Search in Rotated Array",
            "First and Last Position"
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
    },

    {
        name: "Heap / Priority Queue",
        topics: [
            "Heap Basics",
            "Min Heap",
            "Max Heap",
            "Heapify",
            "Priority Queue",
            "Kth Largest Element",
            "Kth Smallest Element"
        ]
    },

    {
        name: "Graphs",
        topics: [
            "Graph Basics",
            "Graph Representation",
            "BFS",
            "DFS",
            "Connected Components",
            "Cycle Detection",
            "Shortest Path",
            "Topological Sort"
        ]
    },

    {
        name: "Greedy",
        topics: [
            "Greedy Basics",
            "Activity Selection",
            "Fractional Knapsack",
            "Job Sequencing",
            "Minimum Coins",
            "Jump Game",
            "Interval Scheduling"
        ]
    },

    {
        name: "Dynamic Programming",
        topics: [
            "DP Basics",
            "Memoization",
            "Tabulation",
            "0/1 Knapsack",
            "Climbing Stairs",
            "House Robber",
            "Longest Common Subsequence",
            "Longest Increasing Subsequence",
            "Coin Change"
        ]
    },

    {
        name: "Backtracking",
        topics: [
            "Backtracking Basics",
            "Generate Subsets",
            "Generate Permutations",
            "N-Queens",
            "Sudoku Solver",
            "Combination Sum",
            "Maze Problems"
        ]
    },

    {
        name: "Bit Manipulation",
        topics: [
            "Bitwise Operators",
            "AND, OR and XOR",
            "Left Shift",
            "Right Shift",
            "Check Odd or Even",
            "Set a Bit",
            "Clear a Bit",
            "Count Set Bits"
        ]
    }
];


const tracker = document.getElementById("tracker");


function getKey(categoryIndex, topicIndex) {
    return `dsa-${categoryIndex}-${topicIndex}`;
}


function isCompleted(categoryIndex, topicIndex) {
    return localStorage.getItem(
        getKey(categoryIndex, topicIndex)
    ) === "true";
}


function toggleTopic(categoryIndex, topicIndex) {

    const key = getKey(categoryIndex, topicIndex);

    const currentStatus =
        isCompleted(categoryIndex, topicIndex);

    localStorage.setItem(key, !currentStatus);

    renderTracker();
}


function renderTracker() {

    tracker.innerHTML = "";

    let totalTopics = 0;
    let completedTopics = 0;


    dsaData.forEach((category, categoryIndex) => {

        const total = category.topics.length;

        let completed = 0;

        category.topics.forEach((topic, topicIndex) => {

            if (isCompleted(categoryIndex, topicIndex)) {
                completed++;
            }

        });


        const percentage =
            Math.round((completed / total) * 100);


        totalTopics += total;
        completedTopics += completed;


        const card =
            document.createElement("div");

        card.className = "progress-card";


        card.innerHTML = `

            <div class="topic-header">

                <h2>${category.name}</h2>

                <span>${percentage}%</span>

            </div>


            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width: ${percentage}%">
                </div>

            </div>


            <p>
                ${completed} / ${total} completed
            </p>


            <div class="topics">

                ${category.topics.map(
                    (topic, topicIndex) => {

                    const checked =
                        isCompleted(
                            categoryIndex,
                            topicIndex
                        );


                    return `

                        <label class="topic">

                            <input
                                type="checkbox"
                                ${checked ? "checked" : ""}
                                onchange="
                                    toggleTopic(
                                        ${categoryIndex},
                                        ${topicIndex}
                                    )
                                "
                            >

                            <span>
                                ${topic}
                            </span>

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
            : Math.round(
                (completedTopics / totalTopics) * 100
            );


    document.getElementById(
        "overallPercentage"
    ).textContent =
        `${overallPercentage}%`;


    document.getElementById(
        "completedCount"
    ).textContent =
        completedTopics;


    document.getElementById(
        "remainingCount"
    ).textContent =
        totalTopics - completedTopics;


    document.getElementById(
        "totalCount"
    ).textContent =
        totalTopics;


    document.getElementById(
        "overallFill"
    ).style.width =
        `${overallPercentage}%`;
}


/* RESET */

document.getElementById("resetBtn")
    .addEventListener("click", function () {

        const confirmReset =
            confirm(
                "Are you sure you want to reset all your DSA progress?"
            );


        if (!confirmReset) {
            return;
        }


        localStorage.clear();

        renderTracker();

    });


/* START */

renderTracker();
