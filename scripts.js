document.getElementById('toggle-chart').addEventListener('click', function() {
    const chartImage = document.getElementById('wordcloud-image');
    const chartCanvas = document.getElementById('wordcloud-chart');

    // 切换词云图的显示与隐藏
    if (chartImage.style.display === "none") {
        chartImage.style.display = "block";
        chartCanvas.style.display = "none";
    } else {
        chartImage.style.display = "none";
        chartCanvas.style.display = "block";
    }
});

// 创建情感分析的饼图
window.onload = function() {
    var ctx = document.getElementById('sentiment-chart').getContext('2d');
    var sentimentChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [{
                data: [50, 30, 20],  // 这里的数据可以替换为实际的情感分析结果
                backgroundColor: ['#28a745', '#dc3545', '#ffc107']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw + '%';
                        }
                    }
                }
            }
        });
};
