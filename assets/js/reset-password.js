import { getAccount } from './appwrite-client.js';

document.addEventListener('DOMContentLoaded', async () => {
    const resetPasswordForm = document.getElementById('reset-password-form');
    const newPasswordInput = document.getElementById('new-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const resetPasswordButton = document.getElementById('reset-password-button');
    const resetButtonSpinner = resetPasswordButton ? resetPasswordButton.querySelector('.spinner-border') : null;
    const messageDisplay = document.getElementById('reset-password-message');
    const passwordMatchError = document.getElementById('password-match-error');
    const successMessage = document.getElementById('success-message');

    // Function to display messages
    function showMessage(type, text) {
        if (messageDisplay) {
            messageDisplay.textContent = text;
            messageDisplay.className = `alert alert-${type} my-4 rounded`;
            messageDisplay.style.display = 'block';
        }
    }

    // Hide message elements initially
    if (messageDisplay) messageDisplay.style.display = 'none';
    if (passwordMatchError) passwordMatchError.style.display = 'none';
    if (resetPasswordForm) resetPasswordForm.style.display = 'none';
    if (successMessage) successMessage.style.display = 'none';

    // Parse URL for userId and secret
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const secret = urlParams.get('secret');

    if (!userId || !secret) {
        showMessage('danger', 'Lien de réinitialisation de mot de passe invalide ou expiré.');
        return;
    }

    // If userId and secret are present, show the form
    if (resetPasswordForm) resetPasswordForm.style.display = 'block';

    resetPasswordForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const newPassword = newPasswordInput ? newPasswordInput.value : '';
        const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';

        // Reset previous messages
        if (messageDisplay) messageDisplay.style.display = 'none';
        if (passwordMatchError) passwordMatchError.style.display = 'none';

        if (newPassword !== confirmPassword) {
            if (passwordMatchError) passwordMatchError.style.display = 'block';
            newPasswordInput.classList.add('is-invalid');
            confirmPasswordInput.classList.add('is-invalid');
            return;
        } else {
            newPasswordInput.classList.remove('is-invalid');
            confirmPasswordInput.classList.remove('is-invalid');
        }

        if (newPassword.length < 8) {
            showMessage('danger', 'Le nouveau mot de passe doit contenir au moins 8 caractères.');
            newPasswordInput.classList.add('is-invalid');
            return;
        } else {
            newPasswordInput.classList.remove('is-invalid');
        }

        if (resetPasswordButton) resetPasswordButton.disabled = true;
        if (resetButtonSpinner) resetButtonSpinner.style.display = 'inline-block';

        try {
            const account = await getAccount();
            await account.updateRecovery(userId, secret, newPassword, confirmPassword);

            if (resetPasswordForm) resetPasswordForm.style.display = 'none';
            if (successMessage) successMessage.style.display = 'block';
            showMessage('success', 'Votre mot de passe a été réinitialisé avec succès !');

            // Optionally, redirect to login page after a delay
            setTimeout(() => {
                window.location.href = '/login';
            }, 5000);

        } catch (error) {
            console.error('[ResetPassword] Erreur lors de la réinitialisation du mot de passe:', error);
            let errorMessageText = 'Une erreur est survenue lors de la réinitialisation de votre mot de passe. Veuillez réessayer ou contacter l\'administrateur.';

            if (error.response && error.response.message) {
                if (error.response.code === 401 && error.response.message.includes('Invalid secret')) {
                    errorMessageText = 'Le lien de réinitialisation est invalide ou a expiré. Veuillez refaire une demande.';
                } else {
                    errorMessageText = error.response.message;
                }
            } else if (error.message) {
                errorMessageText = error.message;
            }
            showMessage('danger', errorMessageText);

        } finally {
            if (resetPasswordButton) resetPasswordButton.disabled = false;
            if (resetButtonSpinner) resetButtonSpinner.style.display = 'none';
        }
    });
});