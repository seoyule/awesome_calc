let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const t_value = parseInt(document.getElementById('t_value').value);
    const num_m = parseInt(document.getElementById('num_m').value);
    const num_w = parseInt(document.getElementById('num_w').value);
    const dc_rate = document.getElementById('dc_rate').value;

    const result1 = document.getElementById('output_m_fee');
    const result2 = document.getElementById('output_w_fee');
    const result3 = document.getElementById('output_acc');

    let t_value_status=false, num_m_status=false, num_w_status=false, dc_rate_status=false;

    if(t_value === '' || isNaN(t_value) || (t_value <= 0)){
        document.getElementById('t_value_error').innerHTML = '금액을 다시 입력해주세요.';
    }else{
        document.getElementById('t_value_error').innerHTML = '';
        t_value_status=true;
    }

    if(num_m === '' || isNaN(num_m) || (num_m < 0)){
        document.getElementById('num_m_error').innerHTML = '인원을 다시 입력해주세요.';
    }else{
        document.getElementById('num_m_error').innerHTML = '';
        num_m_status=true;
    }

    if(num_w === '' || isNaN(num_w) || (num_w < 0)){
        document.getElementById('num_w_error').innerHTML = '인원을 다시 입력해주세요.';
    }else{
        document.getElementById('num_w_error').innerHTML = '';
        num_w_status=true;
    }

    if(dc_rate === '' || isNaN(dc_rate)){
        document.getElementById('dc_rate_error').innerHTML = '할인율을 다시 선택해 주세요.';
    }else{
        document.getElementById('dc_rate_error').innerHTML = '';
        dc_rate_status=true;
    }


    if(t_value_status && num_m_status && num_w_status && dc_rate_status){

        const m_fee_r = t_value/(num_m + (num_w*(1-dc_rate)));
        const w_fee_r = m_fee_r*(1-dc_rate);

        const m_fee = Math.ceil(m_fee_r/1000)*1000;
        const w_fee = Math.ceil(w_fee_r/1000)*1000;

        if(num_m == '0'){
            result1.innerHTML = '남성 회비    : 0원/인당';
        }else{
            result1.innerHTML = '남성 회비    : ' + m_fee + '원/인당';
        }

        if(num_w == '0'){
            result2.innerHTML = '여성+벙주 회비: 0원/인당';
        }else{
            result2.innerHTML = '여성+벙주 회비: ' + w_fee + '원/인당';
        }

        result3.innerHTML = '적립금입금 계좌번호:<br>우리은행(박미영)<br>1002 959 801068';


    }else{
        alert('다시 입력해 주세요');
        result1.innerHTML = '';
        result2.innerHTML = '';
        result3.innerHTML = '';
    }
});


let button2 = document.getElementById('btn2');

button2.addEventListener('click', () => {

    const t_value = document.getElementById('t_value');
    const num_m = document.getElementById('num_m');
    const num_w = document.getElementById('num_w');

    const result1 = document.getElementById('output_m_fee');
    const result2 = document.getElementById('output_w_fee');
    const result3 = document.getElementById('output_acc');

    t_value.value = '';
    num_m.value = '';
    num_w.value = '';

    result1.innerHTML = '';
    result2.innerHTML = '';
    result3.innerHTML = '';


});