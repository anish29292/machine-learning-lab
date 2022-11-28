@Library(['iecoe-jenkins-helper','piper-lib','piper-lib-os']) _

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                // mtaBuild script: this
                // echo 'Build complete.'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        // stage('Security Check') {
        //     steps {
        //         echo 'Checking..'
        //         checkmarxExecuteScan script: this
        //     }
        // }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                echo 'Skipping Deployment....'
                cloudFoundryDeploy script: this
                echo 'Deployed.'
            }
        }
    }
}