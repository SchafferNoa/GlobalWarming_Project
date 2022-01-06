    <?php
    // configuration parameters
    $server_name = "localhost";
    $user_name = "advame_mYADMIN";
    $password = "123456";
    $database = "advame_megamaYeruka";

    // connect to the DB
    $conn = new mysqli($server_name, $user_name, $password, $database);
    // check the connection
    if ($conn->connect_error) {
        die("Error connecting: " . $conn->connect_error);
    }

    // give feedback
    echo "<h1>Thank you for the registration!</h1>";

    // run SQL query
    $sql = "select firstName,lastName,birthday,phoneNumber,email,VolunteeringExp,timeAvailable,frequencies,heardAboutUs,SatisfactionFrom,participateIn from Volunteers";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo    "
        <style>
        table {
            background-color: gray;
            color: white;
            border-color: black;
            border-width: 3px;
            border-style: solid;
            margin:auto;
            text-align: center;
        }
    </style>
        <h2>The Table Before change</h2>
        <table>
            <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>birthday</th>
                <th>phoneNumber</th>
                <th>email</th>
                <th>VolunteeringExp</th>
                <th>timeAvailable</th>
                <th>frequencies</th>
                <th>heardAboutUs</th>
                <th>SatisfactionFrom</th>
                <th>participateIn</th>
                

    
            </tr>";
        while ($row = $result->fetch_assoc()) {
            echo "
                <tr>
                    <td>" . $row["firstName"] . "</td>
                    <td>" . $row["lastName"] . " </td>
                    <td>" . $row["birthday"] . "</td>
                    <td>" . $row["phoneNumber"] . "</td>
                    <td>" . $row["email"] . " </td>
                    <td>" . $row["VolunteeringExp"] . "</td>
                    <td>" . $row["timeAvailable"] . "</td>
                    <td>" . $row["frequencies"] . " </td>
                    <td>" . $row["heardAboutUs"] . "</td>
                    <td>" . $row["SatisfactionFrom"] . "</td>
                    <td>" . $row["participateIn"] . "</td>


                </tr>";
        }
        echo "</table>";
    } else
        echo "No data found";

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $birthday = $_POST['BirthDay'];
    $phoneNumber = $_POST['Phone'];
    $email = $_POST['email'];
    $VolunteeringExp = $_POST['explain'];
    $frequencies = $_POST['Frequencies'];
    $heardAboutUs = $_POST['select_box'];
    $SatisfactionFrom = $_POST['satisfaction'];
    $timeAvailable = $_POST['availableTime'];  
    $participateIn=$_POST['participate'];

    $insert_sql = "INSERT INTO Volunteers (firstName,lastName,birthday,phoneNumber,email,VolunteeringExp,timeAvailable,frequencies,heardAboutUs,SatisfactionFrom, participateIn) VALUES ('" . $firstName . "','" . $lastName . "','" . $birthday . "','" . $phoneNumber . "','" . $email . "','" . $VolunteeringExp . "','" . $timeAvailable . "','" . $frequencies . "','" . $heardAboutUs . "','" . $SatisfactionFrom . "','" . $participateIn . "')";

    // check data
    $result = $conn->query($insert_sql);
    if ($result == true) {
        echo "<h2>The Table After Change</h2>";
        $sql = "select firstName,lastName,birthday,phoneNumber,email,VolunteeringExp,timeAvailable,frequencies,heardAboutUs,SatisfactionFrom,participateIn from Volunteers";
        $result2 = $conn->query($sql);
        echo    "
            <style>
                table {
                    background-color: gray;
                    color: white;
                    border-color: black;
                    border-width: 3px;
                    border-style: solid;
                    margin:auto;
                    text-align: center;
                }
            </style>
            <table>
                <tr>
                    
                <th>firstName</th>
                <th>lastName</th>
                <th>birthday</th>
                <th>phoneNumber</th>
                <th>email</th>
                <th>VolunteeringExp</th>
                <th>timeAvailable</th>
                <th>frequencies</th>
                <th>heardAboutUs</th>
                <th>SatisfactionFrom</th>
                <th>participateIn</th>

                </tr>";
        while ($row = $result2->fetch_assoc()) {
            echo "
                <tr>
                    <td>" . $row["firstName"] . "</td>
                    <td>" . $row["lastName"] . " </td>
                    <td>" . $row["birthday"] . "</td>
                    <td>" . $row["phoneNumber"] . "</td>
                    <td>" . $row["email"] . " </td>
                    <td>" . $row["VolunteeringExp"] . "</td>
                    <td>" . $row["timeAvailable"] . "</td>
                    <td>" . $row["frequencies"] . " </td>
                    <td>" . $row["heardAboutUs"] . "</td>
                    <td>" . $row["SatisfactionFrom"] . "</td>
                    <td>" . $row["participateIn"] . "</td>

                </tr>";
        }
        echo "</table>";
        
    } else {
        echo "error: " . $conn->error;
    }
    ?>