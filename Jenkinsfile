pipeline {
    agent {
        docker {
            image 'node:18'   // container Node.js 18 chính thức
            args '-v /Users/zanis/data/docker-compose/jenkins/jenkins_home/builded:/build_output'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                echo "✅ Checkout code từ GitHub"
                checkout scm
            }
        }

        stage('Install & Build') {
            steps {
                echo "📦 Cài đặt dependencies & build"
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Copy Output') {
            steps {
                echo "📁 Copy build + source ra ./jenkins_home/builded"
                sh 'mkdir -p /build_output'
                sh 'cp -r build/* /build_output/'
                sh 'cp -r src /build_output/src'
                sh 'cp package.json /build_output/'
            }
        }
    }

    post {
        success {
            echo "✅ Build & copy thành công! Kết quả nằm trong ./jenkins_home/builded"
        }
        failure {
            echo "❌ Build lỗi, vui lòng kiểm tra log."
        }
    }
}
