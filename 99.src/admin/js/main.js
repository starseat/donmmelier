function printExcel() {
    $.ajax({
        type: 'get',
        url: './action/get_booking.php',
        success: function(result) {
            // console.log('[printExcel] result:: ', result);
            const resultObj = JSON.parse(result);
            // console.log('[printExcel] resultObj:: ', resultObj);
            outputExcel(resultObj.booking_data);
        },
        error: function(xhr, status, error) {
            console.error('[printExcel] ajax error:: ', error);
        },
    });
}

function outputExcel(data) {
    if (data.length > 0) {
        JwExcel.exportExcel(data, '돈믈리에 사전 신청');
    } else {
        alert('엑셀로 출력할 데이터가 없습니다.');
    }
}