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
            [
            $class: 'DockerComposeBuild',
            dockerComposeFile: './docker-compose.yml',
            useCustomDockerComposeFile: true
            ]
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
