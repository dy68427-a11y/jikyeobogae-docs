// Why: 메일 앱이 없는 PC에서도 문의 주소를 바로 가져갈 수 있게 복사 버튼을 둔다.
// 복사가 막힌 브라우저에서는 주소를 선택 가능한 글자로 그대로 보여 주므로 실패해도 안내만 바꾼다.
function copyMail(button) {
  var address = button.getAttribute('data-mail');
  var done = function (ok) {
    button.textContent = ok ? '복사했어요' : '주소를 길게 눌러 복사해 주세요';
    setTimeout(function () { button.textContent = '주소 복사'; }, 2000);
  };
  if (!navigator.clipboard) { done(false); return; }
  navigator.clipboard.writeText(address).then(function () { done(true); }, function () { done(false); });
}
