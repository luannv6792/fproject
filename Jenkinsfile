pipeline {
    agent any

    environment {
        // Thư mục trên host sẽ chứa build và source copy ra
        OUTPUT_DIR = "/Users/zanis/data/docker-compose/fproject_build"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout từ GitHub dùng SSH key credential
                git(
                    url: 'git@github.com:luannv6792/fproject.git',
                    credentialsId: 'github-ssh-key',
                    branch: 'main'
                )
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "📦 Cài đặt dependencies"
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                echo "🛠 Build project"
                sh 'npm run build'
            }
        }

        stage('Copy Output') {
            steps {
                echo "📁 Copy build và source ra folder ngoài host"
                // Tạo folder nếu chưa có
                sh "mkdir -p ${OUTPUT_DIR}"
                // Copy build
                sh "cp -r build/* ${OUTPUT_DIR}/"
                // Copy source code và package.json
                sh "cp -r src ${OUTPUT_DIR}/src"
                sh "cp package.json ${OUTPUT_DIR}/"
            }
        }
    }

    post {
        success {
            echo "✅ Build & copy thành công! Kiểm tra folder: ${OUTPUT_DIR}"
        }
        failure {
            echo "❌ Build lỗi, kiểm tra console log."
        }
    }
}
