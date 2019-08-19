<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class TicketType extends Enum
{

    const UndefinedError = 0;
    const CriticalError = 1;
    const LogicalError = 2;
    const InterfaceError = 3;
    const SyntacticError = 4;

}
