// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 滚动事件监听
    window.addEventListener('scroll', function() {
        handleScroll();
    });

    // 初始化技能环形图
    initSkillCircles();

    // 平滑滚动
    initSmoothScroll();

    // 表单提交处理
    initFormSubmit();

    // 导航栏样式切换
    initNavStyle();
});

// 处理滚动事件
function handleScroll() {
    // 滚动时的元素动画
    animateElementsOnScroll();
}

// 元素滚动动画
function animateElementsOnScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = (windowTopPosition + windowHeight);

    elements.forEach(element => {
        const elementHeight = element.offsetHeight;
        const elementTopPosition = element.offsetTop;
        const elementBottomPosition = (elementTopPosition + elementHeight);

        // 检查元素是否在视口中
        if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// 初始化技能环形图
function initSkillCircles() {
    const skillCircles = document.querySelectorAll('.skill-circle');

    skillCircles.forEach(circle => {
        const progressCircle = circle.querySelector('.progress');
        const value = parseInt(circle.getAttribute('data-value'));
        const radius = progressCircle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (value / 100) * circumference;

        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = offset;
    });
}

// 平滑滚动
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 表单提交处理
function initFormSubmit() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // 获取表单数据
        const formData = new FormData(form);
        const name = formData.get('name');
        const need = formData.get('need');
        const contact = formData.get('contact');

        // 简单的表单验证
        if (!name || !need || !contact) {
            alert('请填写完整信息');
            return;
        }

        // 模拟表单提交
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;

        submitButton.textContent = '提交中...';
        submitButton.disabled = true;

        // 模拟网络请求
        setTimeout(() => {
            submitButton.textContent = '提交成功！';
            submitButton.style.backgroundColor = '#4caf50';
            
            // 重置表单
            form.reset();

            // 恢复按钮状态
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '#1a237e';
            }, 2000);
        }, 1500);
    });
}

// 导航栏样式切换
function initNavStyle() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 -2px 20px rgba(0,0,0,0.15)';
        } else {
            nav.style.backgroundColor = 'var(--primary-white)';
            nav.style.boxShadow = '0 -2px 10px rgba(0,0,0,0.1)';
        }
    });
}

// 案例详情展开
function toggleCaseDetails(caseId) {
    const details = document.getElementById(caseId);
    if (details) {
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    }
}

// 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// 窗口大小变化时重新计算
window.addEventListener('resize', function() {
    // 可以在这里添加需要响应式调整的代码
});

// 移动端菜单处理（如果需要）
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('mobile-active');
    }
}