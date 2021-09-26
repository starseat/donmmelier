<?php

include('../admin/action/common.php');
include('../admin/action/db_conn.php');

header('Content-Type: text/html; charset=UTF-8');

$result_array = array();

$httpMethod = $_SERVER["REQUEST_METHOD"];
if($httpMethod != 'POST') {
    $result_array['message'] = '잘못된 요청입니다.';
    $result_array['result'] = false;

    echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    mysqli_close($conn);
    flush();
    exit;
}

$regName = mysqli_real_escape_string($conn, $_POST['regName']);
// viewAlert($regName);
// echo 'name: ' . $regName; echo '<br>';
$regPhone = mysqli_real_escape_string($conn, $_POST['regPhone']);
// viewAlert($regPhone);
// echo 'phone: ' . $regPhone; echo '<br>';
$regDevice = mysqli_real_escape_string($conn, $_POST['regDevice']);
// viewAlert($regDevice);
// echo 'device: ' . $regDevice; echo '<br>';
$regDetail = mysqli_real_escape_string($conn, $_POST['regDetail']);
// viewAlert($regDetail);
// echo 'detail: ' . $regDetail; echo '<br>';


$sql  = "SELECT name, phone, device, detail, created_at FROM event_advance_booking WHERE phone = $regPhone";
// viewAlert($sql);
$result = mysqli_query($conn, $sql) or exit(mysqli_error($conn));
$reg_count = $result->num_rows;
// viewAlert($reg_count);
$reg_info = mysqli_fetch_array($result);
if($reg_count > 0) {
    $result_array['message'] = '이미 등록된 번호입니다.';
    $result_array['date'] = $reg_info['created_at'];
    $result_array['name'] = $reg_info['name'];
    $result_array['device'] = $reg_info['device'];
    $result_array['detail'] = $reg_info['detail'];
    $result_array['result'] = false;

    echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    mysqli_close($conn);
    flush();
    exit;
}


$sql = "
    INSERT INTO event_advance_booking (phone, name, device, detail)
    VALUES ("
    . "'" . $regPhone . "', "
    . "'" . $regName . "', "
    . "'" . $regDevice . "', "
    . "'" . $regDetail . "')";
// viewAlert($sql);
$result = mysqli_query($conn, $sql) or exit(mysqli_error($conn));

$result_array['message'] = '등록되었습니다.';
$result_array['result'] = true;

echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

mysqli_close($conn);
flush();

?>
