pipeline {
    agent any

    environment {
        // Biến môi trường WORKSPACE của Jenkins trỏ đến thư mục project trong container
        COMPOSE_FILE = "${WORKSPACE}/docker-compose.yml"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "✅ Checkout code từ GitHub"
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "🔨 Build Docker image bằng docker-compose"
                    sh "docker-compose -f ${COMPOSE_FILE} build"
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    echo "🚀 Deploy ứng dụng bằng docker-compose"
                    sh "docker-compose -f ${COMPOSE_FILE} down"
                    sh "docker-compose -f ${COMPOSE_FILE} up -d"
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deploy thành công trên Docker Desktop!"
        }
        failure {
            echo "❌ Có lỗi khi build/deploy, kiểm tra console log."
        }
    }
}
