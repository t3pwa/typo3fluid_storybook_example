<?php
declare(strict_types = 1);

defined('TYPO3_MODE') || die();

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

(function () {
    $extensionKey = 'typo3fluid_storybook_example';

	ExtensionManagementUtility::addTypoScript(
		$extensionKey,
		'constants',
		'@import "EXT:' . $extensionKey . '/Configuration/TypoScript/constants.typoscript"'
	);

	ExtensionManagementUtility::addTypoScript(
		$extensionKey,
		'setup',
		'@import "EXT:' . $extensionKey . '/Configuration/TypoScript/setup.typoscript"'
	);
})();
