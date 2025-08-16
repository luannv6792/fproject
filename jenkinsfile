pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Lấy code từ GitHub (Jenkins đã cấu hình SSH key)
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deploy thành công trên local bằng Docker Compose!"
        }
        failure {
            echo "❌ Có lỗi khi build/deploy, hãy kiểm tra log."
        }
    }
}
