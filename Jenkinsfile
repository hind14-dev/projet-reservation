pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning...'
            }
        }

        stage('Build') {
            steps {
                sh 'echo Build étape'
            }
        }

        stage('Test') {
            steps {
                sh 'echo Test étape'
            }
        }
    }

    post {
        success {
            echo 'Pipeline réussi'
        }
        failure {
            echo 'Pipeline échoué'
        }
    }
}
