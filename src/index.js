import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値の取得
  const inputText = document.getElementById("input-todo").value;
  document.getElementById("input-todo").value = "";

  //liを生成
  const li = document.createElement("li");
  //divを生成
  const div = document.createElement("div");
  div.className = "list-row";
  //pを生成
  const p = document.createElement("p");
  p.className = "list-header";
  p.innerText = inputText;

  //完了ボタン生成
  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    alert("完了");
  });

  //削除ボタン生成
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    alert("削除");
  });

  //親子関係を設定
  div.appendChild(p);
  div.appendChild(compButton);
  div.appendChild(delButton);
  li.appendChild(div);

  //リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};

//指定したIDに対してイベントを付与
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
