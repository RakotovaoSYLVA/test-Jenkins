pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Récupérer le code source depuis GitHub
                git 'https://github.com/RakotovaoSYLVA/test-Jenkins.git'
            }
        }

        stage('Install') {
            steps {
                // Installer les dépendances Node.js
                //test installation package
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Construire le projet React (génère le dossier build)
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Copier les fichiers build sur le serveur (adapter ici)
                // Par exemple avec scp
                // sh 'scp -r build/* user@ip_serveur:/chemin/vers/dossier/web'
                echo 'Déploiement à adapter selon ta cible'
            }
        }
    }
}
