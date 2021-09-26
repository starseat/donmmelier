<?php

// 로그인 체크
include('./login_check.php');

include('./common.php');
include('./db_conn.php');

header('Content-Type: text/html; charset=UTF-8');

$sql  = "SELECT seq, name, phone, device, detail, created_at FROM event_advance_booking";

$result = mysqli_query($conn, $sql) or exit(mysqli_error($conn));
$data_count = $result->num_rows;

$result_array = array();
if ($data_count > 0) {

    $data_list = array();
    while($row = $result->fetch_array()) {
        array_push($data_list, [
            'id' => $row['seq'],
            '이름' => $row['name'],
            '연락처' => $row['phone'],
            '등록기기' => $row['device'],
            '기기상세' => $row['detail'],
            '등록일시' => $row['created_at']
        ]);
    }

    $result_array['booking_data'] = $data_list;
} else {
    $result_array['booking_data'] = array();
}

$result->free();

mysqli_close($conn);
flush();

echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

?>