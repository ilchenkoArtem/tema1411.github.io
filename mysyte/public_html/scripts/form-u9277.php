<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2018.0.0.379
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Отправка Опрос',
	'heading' => 'Отправка новой формы',
	'success_redirect' => '../phone/thank-you.html',
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
		'Email' => array(
			'order' => 7,
			'type' => 'email',
			'label' => 'Ваша почта (по желанию)',
			'required' => false,
			'errors' => array(
				'format' => 'Поле \'Ваша почта (по желанию)\' содержит недействительное сообщение эл. почты.'
			)
		),
		'custom_U9361' => array(
			'order' => 6,
			'type' => 'string',
			'label' => 'Ваше имя (по желанию)',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U9327' => array(
			'order' => 4,
			'type' => 'checkboxgroup',
			'label' => '4. Что Вы купили?',
			'required' => true,
			'optionItems' => array(
				'Аптечный допинг',
				'Как избавиться от диастаза',
				'Фитнес-калькулятор',
				'Какой у меня тип фигуры',
				'Какой у меня тип фигуры',
				'Расти жопка! Топ 5 программ',
				'Консультация диетолога',
				'Программа тренировок/питания',
				'Консультация спортивного врача',
				'Пока ничего'
			),
			'errors' => array(
				'required' => 'Поле \'4. Что Вы купили?\' не может быть пустым.',
				'format' => 'Недопустимое значение поля \"4. Что Вы купили?\".'
			)
		),
		'custom_U9317' => array(
			'order' => 5,
			'type' => 'radiogroup',
			'label' => '5. Порекомендуете ли Вы наш портал знакомым и друзьям',
			'required' => true,
			'optionItems' => array(
				'Да',
				'Нет'
			),
			'errors' => array(
				'required' => 'Поле \'5. Порекомендуете ли Вы наш портал знакомым и друзьям\' не может быть пустым.',
				'format' => 'Недопустимое значение поля \"5. Порекомендуете ли Вы наш портал знакомым и друзьям\".'
			)
		),
		'custom_U9293' => array(
			'order' => 1,
			'type' => 'radiogroup',
			'label' => '1. Какую оценку Вы поставите этому порталу?',
			'required' => true,
			'optionItems' => array(
				'1',
				'2',
				'3',
				'4',
				'5'
			),
			'errors' => array(
				'required' => 'Поле \'1. Какую оценку Вы поставите этому порталу?\' не может быть пустым.',
				'format' => 'Недопустимое значение поля \"1. Какую оценку Вы поставите этому порталу?\".'
			)
		),
		'custom_U9278' => array(
			'order' => 3,
			'type' => 'checkboxgroup',
			'label' => '3. Какие услуги Вам интересны?',
			'required' => true,
			'optionItems' => array(
				'Консультация диетолога',
				'Программа тренировок/питания',
				'Консультация спортивного врача',
				'Никакие'
			),
			'errors' => array(
				'required' => 'Поле \'3. Какие услуги Вам интересны?\' не может быть пустым.',
				'format' => 'Недопустимое значение поля \"3. Какие услуги Вам интересны?\".'
			)
		),
		'custom_U9365' => array(
			'order' => 2,
			'type' => 'checkboxgroup',
			'label' => '2. Какие товары Вам интересны?',
			'required' => true,
			'optionItems' => array(
				'Аптечный допинг',
				'Как избавиться от диастаза',
				'Фитнес-калькулятор',
				'Какой у меня тип фигуры',
				'Как правильно питаться',
				'Расти жопка! Топ 5 программ',
				'Никакие'
			),
			'errors' => array(
				'required' => 'Поле \'2. Какие товары Вам интересны?\' не может быть пустым.',
				'format' => 'Недопустимое значение поля \"2. Какие товары Вам интересны?\".'
			)
		)
	)
);

process_form($form);
?>