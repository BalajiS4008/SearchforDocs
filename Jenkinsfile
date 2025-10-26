#!groovy

node('EJ2Node20') {
    try {
        deleteDir()

        stage('Import') {
            git url: 'https://gitea.syncfusion.com/essential-studio/ej2-groovy-scripts.git', branch: 'master', credentialsId: env.GiteaCredentialID;
            shared = load 'src/shared.groovy'
        }

        stage('Checkout') {
            checkout scm
        }

        stage('Validation') {
            shared.getProjectDetails()
            shared.gitlabCommitStatus('running')
        }

        if (shared.checkCommitMessage()) {
            stage('Install') {
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
                sh 'npm install @azure/static-web-apps-cli'
            }

            stage('Build') {
                sh 'npm run build'
            }

            stage('Test') {
                shared.test()
                sh 'npm run validation'
            }

            stage('Publish') {
                sh 'npm run ci-publish'
            }
        }

        shared.gitlabCommitStatus('success')
        deleteDir()
    }
    catch(Exception e) {
        shared.throwError(e)
    }
}
