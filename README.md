<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hostel Complaint System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #000000;
            margin: 5;
            padding: 5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        form {
            background-color: #ff0000;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 400px;
        }
        input[type="text"],
        textarea {
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
            box-sizing: border-box;
        }
        textarea {
            height: 100px;
        }
        input[type="submit"] {
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
            border: none;
            padding: 10px 20px;
            border-radius: 3px;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

<form action="submit_complaint.php" method="post">
    <h2>Hostel Complaint Form</h2>
    <label for="User ID">User ID</label>
    <input type="text" id="USer ID" name="User ID" required>

    <label for="room">Room Number</label>
    <input type="text" id="room" name="room" required>

    <label for="complaint">Complaint</label>
    <textarea id="complaint" name="complaint" required></textarea>

    <input type="submit" value="Submit Complaint">
</form>

</body>
</html>
