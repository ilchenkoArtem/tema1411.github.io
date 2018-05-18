<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2018.0.0.379
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Отправка Связаться',
	'heading' => 'Отправка новой формы',
	'success_redirect' => 'thank-you!.html',
	'resources' => array(
		'checkbox_checked' => 'Отмечено',
		'checkbox_unchecked' => 'Флажок не установлен',
		'submitted_from' => 'Формы, отправленные с веб-сайта: %s',
		'submitted_by' => 'IP-адрес посетителя: %s',
		'too_many_submissions' => 'Недопустимо высокое количество отправок с этого IP-адреса за последнее время',
		'failed_to_send_email' => 'Не удалось отправить сообщение эл. почты',
		'invalid_reCAPTCHA_private_key' => 'Недействительный закрытый ключ reCAPTCHA.',
		'invalid_reCAPTCHA2_private_key' => 'Недействительный закрытый ключ reCAPTCHA 2.0.',
		'invalid_reCAPTCHA2_server_response' => 'Недействительный ответ сервера reCAPTCHA 2.0.',
		'invalid_field_type' => 'Неизвестный тип поля \'%s\'.',
		'invalid_form_config' => 'Недопустимая конфигурация поля \"%s\".',
		'unknown_method' => 'Неизвестный метод запроса сервера'
	),
	'email' => array(
		'from' => 'ferrumbody@gmail.com',
		'to' => 'ferrumbody@gmail.com'
	),
	'fields' => array(
		'custom_U12378' => array(
			'order' => 1,
			'type' => 'string',
			'label' => 'Имя',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U12382' => array(
			'order' => 4,
			'type' => 'checkbox',
			'label' => 'Я согласен с обработкой данных',
			'required' => true,
			'errors' => array(
				'required' => 'Поле \'Я согласен с обработкой данных\' не может быть пустым.'
			)
		),
		'custom_U12359' => array(
			'order' => 2,
			'type' => 'string',
			'label' => 'Сотовый телефон',
			'required' => true,
			'errors' => array(
				'required' => 'Поле \'Сотовый телефон\' не может быть пустым.'
			)
		),
		'custom_U12366' => array(
			'order' => 3,
			'type' => 'checkboxgroup',
			'label' => 'Мне нужна услуга*',
			'required' => true,
			'optionItems' => array(
				'Программа тренировок и питания',
				'Консультации спортивного врача',
				'Консультации диетолога'
			),
			'errors' => array(
				'required' => 'Поле \'Мне нужна услуга*\' не может быть пустым.',
				'format' => 'Недопустимое значение поля \"Мне нужна услуга*\".'
			)
		)
	)
);

process_form($form);
?>