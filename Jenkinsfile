pipeline {
    agent {
      docker {
          image 'node:8.11.1'
      }
    }
    stages {
        stage('Build') {
            steps {
                sh 'cd client && npm run prod'
            }
        }
        stage('Test') {
            steps {
                sh 'cd client && npm run test'
            }
        }
    }
}
