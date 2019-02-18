pipeline {
    agent {
        docker {
            image 'node' 
        }
    }
    environment {
        HOME = '.'
        DEPLOY = "${httpRequestTo.status}"
    }
    stages {
        stage('DockerComposeBuild') {
            sh 'docker-compose up -d'
        }
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test' 
            }
        }
    }
}
