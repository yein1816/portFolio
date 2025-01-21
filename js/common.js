// 공 애니메이션
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
const menuItems = document.querySelectorAll(".menu ul li");

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
// modalBackground.addEventListener("click", () => {
//   menu.classList.remove("open");
//   menuIcon.classList.remove("active");
//   modalBackground.classList.remove("show");
// });


// 메뉴 li 클릭시 글자색 변경

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

//a링크 클릭시 해당 section으로 이동
const links = document.querySelectorAll(".menu ul li a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.remove("open");
    menuIcon.classList.remove("active");
    modalBackground.classList.remove("show");
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});


// 해당 section 이동 시 menuIcon 색 변경
// 스크롤 이벤트 핸들러
window.addEventListener("scroll", function () {
  const aboutMeSection = document.getElementById("aboutMe");
  const projectSection = document.getElementById("project");

  const scrollPosition = window.scrollY; // 현재 스크롤 위치
  const aboutMeOffset = aboutMeSection.offsetTop; // About Me 섹션의 위치
  const projectOffset = projectSection.offsetTop; // Project 섹션의 위치
  
  console.log(scrollPosition);
  

  if (scrollPosition >= aboutMeOffset && scrollPosition < projectOffset) {
    menuIcon.style.backgroundColor = "#000c24"; // About Me 섹션에 있을 때 색상 변경
  } else if (scrollPosition >= projectOffset) {
    menuIcon.style.backgroundColor = "#000c24"; // Project 섹션에 있을 때 색상 변경
  } else {
    menuIcon.style.backgroundColor = "#d9d9d9"; // 기본 색상으로 돌아가기
  }
});

// 클릭 시 회전 효과를 트리거하는 스크립트
document.querySelector("#contactWrap").addEventListener("click", function () {
  this.classList.toggle("clicked"); // 클릭 시 class를 토글하여 회전
});
