// 공 애니메이션션
const circle = document.querySelector(".circle");

let posX = 0;
let posY = 0;
let velocityX = 3; // Horizontal speed
let velocityY = 3; // Vertical speed
const circleSize = 300;

function animateCircle() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  posX += velocityX;
  posY += velocityY;

  // Bounce horizontally
  if (posX + circleSize > windowWidth || posX < 0) {
    velocityX = -velocityX;
  }

  // Bounce vertically
  if (posY + circleSize > windowHeight || posY < 0) {
    velocityY = -velocityY;
  }

  circle.style.left = `${posX}px`;
  circle.style.top = `${posY}px`;

  requestAnimationFrame(animateCircle);
}

circle.style.position = "absolute";
animateCircle();

const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");
const modalBackground = document.querySelector("#modal .background");

function toggleMenu() {
  // 메뉴와 아이콘 상태 토글
  menu.classList.toggle("open");
  menuIcon.classList.toggle("active");

  // 배경을 클릭하면 메뉴를 닫기 위해 추가
  if (menu.classList.contains("open")) {
    modalBackground.classList.add("show");
  } else {
    modalBackground.classList.remove("show");
  }
}

// 모달 배경 클릭 시 메뉴 닫기
modalBackground.addEventListener("click", () => {
  menu.classList.remove("open");
  menuIcon.classList.remove("active");
  modalBackground.classList.remove("show");
});

// 메뉴 li 클릭시 글자색 변경
// const menuItems = document.querySelectorAll(".menu ul li");

// menuItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     // 기존 활성화된 항목에서 active 클래스 제거
//     menuItems.forEach((menu) => menu.classList.remove("active"));
//     // 클릭한 항목에 active 클래스 추가
//     item.classList.add("active");
//   });
// });

menuItems.forEach((item) => {
  // 마우스 오버 시 색상 변경
  item.addEventListener("mouseover", () => {
    item.querySelector("a").style.color = "#000";
  });

  // 마우스가 벗어날 때 기본 색상 복구
  item.addEventListener("mouseout", () => {
    if (!item.classList.contains("active")) {
      item.querySelector("a").style.color = ""; // 기본 CSS로 복구
    }
  });
});

const links = document.querySelectorAll(".menu ul li a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      this.scrollIntoView({
        behavior: "smoth",
        block: "start",
      });
    }
  });
});
