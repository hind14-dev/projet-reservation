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
                bat 'echo Build étape'
            }
        }

        stage('Test') {
            steps {
                bat 'echo Test étape'
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
