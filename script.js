document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Lấy giá trị từ các input
    var username = document.getElementById("username").value;
    var studentID = document.getElementById("studentID").value;
    var Class = document.getElementById("Class").value;

    // Lấy các câu trả lời
    var answers = [];
    // Ví dụ: Lấy câu trả lời của câu hỏi 1
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer) {
        answers.push(q1Answer.value);
    }

    // Thực hiện tương tự cho các câu hỏi khác

    // Tính điểm
    var score = calculateScore(answers);

    // Hiển thị điểm số
    alert("Tên đăng nhập: " + username + "\nMã sinh viên: " + studentID + "\nLớp: " + Class + "\nĐiểm số: " + score);
});

function calculateScore(answers) {
    // Tính điểm số dựa trên các câu trả lời
    // Việc này sẽ phụ thuộc vào cách bạn thiết kế câu hỏi và xử lý kết quả
    // Đây là một ví dụ đơn giản
    var score = 0;
    // Ví dụ: Nếu câu trả lời cho câu hỏi 1 là "A", thì tăng điểm
    if (answers.includes("A")) {
        score += 1;
    }
    // Thực hiện tương tự cho các câu hỏi khác
    return score;
}
